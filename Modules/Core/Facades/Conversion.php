<?php


namespace Modules\Core\Facades;


use Modules\Core\Helpers\ConversionRegistry;

class Conversion
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return ConversionRegistry::class;
    }
}
