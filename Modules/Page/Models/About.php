<?php

namespace Modules\Page\Models;

use Illuminate\Database\Eloquent\Model;
use Modules\Core\Traits\HasTranslations;
use Modules\Core\Traits\Metable;

class About extends Model
{
    use HasTranslations, Metable;

    protected $fillable = ['title', 'description'];
    public $translatable = ['title', 'description'];
}
