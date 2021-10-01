<?php

namespace Modules\Member\Models;

use Illuminate\Database\Eloquent\Model;
use Modules\Core\Helpers\SlugOptions;
use Modules\Core\Traits\HasMedia;
use Modules\Core\Traits\HasSlug;
use Modules\Core\Traits\HasTranslations;
use Modules\Core\Traits\Metable;

class Member extends Model
{
    use HasTranslations, HasMedia, Metable, HasSlug;

    protected $fillable = ['full_name', 'slug', 'title', 'bio'];

    public $translatable = ['full_name', 'title', 'bio'];

    public function getSlugOptions()
    {
        return SlugOptions::create()->generateSlugsFrom('title')->saveSlugsTo('slug');
    }
}
