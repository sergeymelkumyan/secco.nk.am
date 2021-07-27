<?php

namespace Modules\Core\DataType;

/**
 * Handle serialization of integers.
 */
class IntegerHandler extends ScalarHandler
{
    /**
     * {@inheritdoc}
     */
    protected $type = 'integer';
}
