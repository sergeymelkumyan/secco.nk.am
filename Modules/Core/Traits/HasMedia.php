<?php


namespace Modules\Core\Traits;

use Illuminate\Database\Eloquent\Collection;
use Modules\Core\Helpers\MediaGroup;
use Modules\Core\Jobs\PerformConversions;
use Modules\Core\Models\Media;

trait HasMedia
{
    protected $mediaGroups = [];

    public static function bootHasMedia()
    {
        static::deleted(function (self $model) {
            $model->detachMedia();
        });
    }

    public function media()
    {
        return $this->morphToMany(Media::class, 'mediable')->withPivot('group');
    }

    public function hasMedia(string $group = 'default')
    {
        return count($this->getMedia($group)) > 0;
    }

    public function getMedia(string $group = 'default', $filters = [])
    {
        return $this->media->where('pivot.group', $group);
    }

    public function getFirstMedia(string $group = 'default', $filters = [])
    {
        return $this->getMedia($group, $filters)->first();
    }

    public function getFirstMediaId(string $group = 'default')
    {
        return $this->getFirstMedia($group)->id ?? null;
    }

    public function getFirstMediaUrl(string $group = 'default', string $conversion = '')
    {
        $media = $this->getFirstMedia($group);

        if (!$media) {
            return '';
        }

        return $media->file_name;
    }

    public function getUiMedia($group = 'default')
    {
        return $this->getMedia($group)->pluck('file_name');
    }

    public function getMediaIds(string $group = 'default')
    {
        return $this->getMedia($group)->pluck('id')->toArray();
    }

    public function attachMedia($media, string $group = 'default', array $conversions = [])
    {
        $this->registerMediaGroups();
        $ids = (array)$media;

        $mediaGroup = $this->getMediaGroup($group);

        if ($mediaGroup && $mediaGroup->hasConversions()) {
            $conversions = array_merge(
                $conversions, $mediaGroup->getConversions()
            );
        }

        if (!empty($conversions)) {
            $model = Media::class;

            $media = $model::findMany($ids);
            $media->each(function ($media) use ($conversions) {
                PerformConversions::dispatch(
                    $media, $conversions
                );
            });
        }

        $this->clearMediaGroup($group);

        $this->media()->attach($ids, [
            'group' => $group,
        ]);
    }

    protected function parseMediaIds($media)
    {
        if ($media instanceof Collection) {
            return $media->modelKeys();
        }

        if ($media instanceof Media) {
            return [$media->getKey()];
        }

        return (array)$media;
    }

    public function registerMediaGroups()
    {
    }

    protected function addMediaGroup(string $name)
    {
        $group = new MediaGroup();
        $this->mediaGroups[$name] = $group;
        return $group;
    }

    public function getMediaGroup(string $name)
    {
        return $this->mediaGroups[$name] ?? null;
    }

    public function detachMedia($media = null)
    {
        $this->media()->detach($media);
    }

    public function clearMediaGroup(string $group = 'default')
    {
        $this->media()->wherePivot('group', $group)->detach();
    }
}
