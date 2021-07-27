<?php


namespace Modules\Gallery\Repositories;


use Modules\Core\Eloquent\BaseRepository;
use Modules\Gallery\Models\Gallery;

class GalleryRepository extends BaseRepository
{
    public function model()
    {
        return Gallery::class;
    }
}
