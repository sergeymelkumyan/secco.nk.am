<?php

namespace Modules\Core\Transformers;

use Illuminate\Http\Resources\Json\JsonResource;

class MediaResource extends JsonResource
{

    public function toArray($request)
    {
        return parent::toArray($request);
    }
}
