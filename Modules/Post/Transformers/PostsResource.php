<?php

namespace Modules\Post\Transformers;

use Illuminate\Http\Resources\Json\JsonResource;

class PostsResource extends JsonResource
{
    public function toArray($request)
    {
        return parent::toArray($request);
    }
}
