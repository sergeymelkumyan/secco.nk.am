<?php

namespace Modules\Page\Models;

use Illuminate\Database\Eloquent\Model;
use Modules\Core\Traits\HasTranslations;

class Document extends Model
{
    use HasTranslations;

    protected $fillable = ['title','file'];

    public $translatable = ['title'];
}
