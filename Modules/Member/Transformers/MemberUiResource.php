<?php

namespace Modules\Member\Transformers;

use Illuminate\Http\Resources\Json\JsonResource;

class MemberUiResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'full_name' => $this->full_name,
            'title' => $this->title,
            'slug' => $this->slug,
            'bio' => $this->bio,
            'image' => $this->getFirstMediaUrl('image'),
            'meta' => $this->getUiMeta()
        ];
    }
}
