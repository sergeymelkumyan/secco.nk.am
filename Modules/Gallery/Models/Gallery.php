<?php

namespace Modules\Gallery\Models;

use Illuminate\Database\Eloquent\Model;
use Modules\Core\Helpers\SlugOptions;
use Modules\Core\Traits\HasSlug;
use Modules\Core\Traits\HasMedia;
use Modules\Core\Traits\HasTranslations;

class Gallery extends Model
{
    use HasTranslations, HasMedia,HasSlug;

    protected $fillable = ['type', 'video_url', 'title'];

    public $translatable = ['title'];

    public function getSlugOptions()
    {
        return SlugOptions::create()->generateSlugsFrom('title')->saveSlugsTo('slug');
    }
}
