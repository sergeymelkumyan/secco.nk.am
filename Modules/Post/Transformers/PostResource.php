<?php

namespace Modules\Post\Transformers;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->getTranslations('title'),
            'type' => $this->type,
            'slug' => $this->slug,
            'date' => $this->date,
            'image' => $this->getFirstMediaId('image'),
            'short_description' => $this->getTranslations('short_description'),
            'description' => $this->getTranslations('description'),
            'meta' => $this->getAllMeta()
        ];
    }
}
