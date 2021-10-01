<?php

namespace Modules\Post\Repositories;

use Modules\Core\Eloquent\BaseRepository;
use Modules\Post\Models\Post;

class PostRepository extends BaseRepository
{
    public function model()
    {
        return Post::class;
    }

    public function create(array $attributes)
    {

        $model = parent::create($attributes);
        $model->attachMedia($attributes['image'], 'image');

        if (isset($attributes['meta'])) {
            $model->syncMeta($attributes['meta']);
        }

        return $model;
    }


    public function update(array $attributes, $id)
    {
        $model = parent::update($attributes, $id);

        if (isset($attributes['image'])) {
            $model->attachMedia($attributes['image'], 'image');
        }

        if (isset($attributes['meta'])) {
            foreach ($attributes['meta'] as $key => $value) {
                $model->setMeta($key, $value);
            }
        }

        return $model;
    }

    public function getByType($type, $limit = null)
    {
        $model = $this->model
            ->where('type', $type)
//            ->whereNotIn('id', $ids)
            ->orderByDesc('date')
            ->limit($limit)
            ->get();

        return $this->parserResult($model);
    }
}
