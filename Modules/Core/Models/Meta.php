<?php

namespace Modules\Core\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Modules\Core\DataType\Registry;
use Modules\Core\Traits\HasTranslations;


class Meta extends Model
{
    use HasTranslations;

    public $timestamps = false;

    protected $table = 'meta';

    protected $guarded = ['id', 'metable_type', 'metable_id', 'type'];

    protected $translatable = ['value'];

    protected $attributes = [
        'type' => 'null',
        'value' => '',
    ];

    protected $cachedValue;

    public function metable(): MorphTo
    {
        return $this->morphTo();
    }


//    public function getValueAttribute()
//    {
//        if (!isset($this->cachedValue)) {
//            $this->cachedValue = $this->getDataTypeRegistry()
//                ->getHandlerForType($this->type)
//                ->unserializeValue($this->attributes['value']);
//        }
//
//        return $this->cachedValue;
//    }

    public function setValueAttribute($value): void
    {
        $registry = $this->getDataTypeRegistry();

        $this->attributes['type'] = $registry->getTypeForValue($value);
        $this->attributes['value'] = $registry->getHandlerForType($this->type)
            ->serializeValue($value);

        $this->cachedValue = null;
    }

    public function getRawValue(): string
    {
        return $this->attributes['value'];
    }

    protected function getDataTypeRegistry(): Registry
    {
        return app('metable.datatype.registry');
    }
}
