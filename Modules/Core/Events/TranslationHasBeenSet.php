<?php

namespace Modules\Core\Events;

class TranslationHasBeenSet
{
    public $model;
    public $key;

    public $locale;

    public $oldValue;
    public $newValue;

    public function __construct($model, string $key, string $locale, $oldValue, $newValue)
    {
        $this->model = $model;
        $this->key = $key;
        $this->locale = $locale;
        $this->oldValue = $oldValue;
        $this->newValue = $newValue;
    }
}
