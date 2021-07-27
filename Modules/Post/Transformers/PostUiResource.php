<?php

namespace Modules\Post\Transformers;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class PostUiResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'title' => $this->title,
            'slug' => $this->slug,
            'image' => $this->getFirstMediaUrl('image'),
            'short_description' => $this->short_description,
            'description' => $this->description,
            'date' => Carbon::parse($this->date)->format('d.m.Y'),
            'meta' => $this->getUiMeta()
        ];
    }
}
