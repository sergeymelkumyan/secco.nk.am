<?php

namespace Modules\Gallery\Transformers;

use Illuminate\Http\Resources\Json\JsonResource;

class GalleryResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->getTranslations('title'),
            'type' => $this->type,
            'video_url' => $this->video_url,
            'main_image' => $this->getFirstMediaId('main_image'),
            'image' => $this->getMediaIds('gallery')
        ];
    }
}
