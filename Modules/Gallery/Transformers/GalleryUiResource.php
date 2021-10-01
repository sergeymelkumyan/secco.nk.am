<?php

namespace Modules\Gallery\Transformers;

use Illuminate\Http\Resources\Json\JsonResource;

class GalleryUiResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'title' => $this->title,
            'slug' => $this->slug,
            'type' => $this->type,
            'image' => $this->getFirstMediaUrl('main_image'),
            'photos' => $this->getUiMedia('gallery'),
            'video_url' => $this->video_url,
        ];
    }
}
