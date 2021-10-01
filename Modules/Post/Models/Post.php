<?php

namespace Modules\Post\Models;

use Illuminate\Database\Eloquent\Model;
use Modules\Core\Helpers\SlugOptions;
use Modules\Core\Traits\HasMedia;
use Modules\Core\Traits\HasSlug;
use Modules\Core\Traits\HasTranslations;
use Modules\Core\Traits\Metable;

class Post extends Model
{
    use HasTranslations, HasMedia, Metable, HasSlug;

    protected $fillable = [
        'type',
        'title',
        'date',
        'slug',
        'short_description',
        'description'
    ];

    protected $translatable = [
        'title',
        'short_description',
        'description'
    ];

    protected $dates = [
        'date'
    ];

    protected $dateFormat = 'Y/m/d';

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('title')
            ->saveSlugsTo('slug');
    }
}
