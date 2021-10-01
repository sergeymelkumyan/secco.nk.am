<?php


namespace Modules\Member\Repositories;


use Modules\Core\Eloquent\BaseRepository;
use Modules\Member\Models\Member;

class MemberRepository extends BaseRepository
{
    public function model()
    {
        return Member::class;
    }

    public function create(array $attributes)
    {
        $model = parent::create($attributes);
        $model->attachMedia($attributes['image'], 'image');

        if (isset($attributes['meta'])) {
            $model->syncMeta($attributes['meta']);
        }
        return $this->parserResult($model);
    }

    public function update(array $attributes, $id)
    {
        $model = parent::update($attributes, $id);

        if (isset($attributes['image'])) {
            $model->attachMedia($attributes['image'], 'image');
        }

        if (isset($attributes['meta'])) {
            $model->syncMeta($attributes['meta']);
        }

        return $this->parserResult($model);
    }
}
