<?php

return [
    'name' => 'Core',
    'translatable' => [
        'fallback_locale' => 'hy'
    ],
    'media' => [
        'disk' => 'public',
        'queue' => null,
        'model' => \Modules\Core\Models\Media::class,
    ],
    'datatypes' => [
        \Modules\Core\DataType\BooleanHandler::class,
        \Modules\Core\DataType\NullHandler::class,
        \Modules\Core\DataType\IntegerHandler::class,
        \Modules\Core\DataType\FloatHandler::class,
        \Modules\Core\DataType\StringHandler::class,
        \Modules\Core\DataType\DateTimeHandler::class,
        \Modules\Core\DataType\ArrayHandler::class,
        \Modules\Core\DataType\ModelHandler::class,
        \Modules\Core\DataType\ModelCollectionHandler::class,
        \Modules\Core\DataType\SerializableHandler::class,
        \Modules\Core\DataType\ObjectHandler::class
    ]
];
