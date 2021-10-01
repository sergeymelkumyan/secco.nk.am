<?php

namespace Modules\Member\Transformers;

use Illuminate\Http\Resources\Json\JsonResource;

class MemberResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'full_name' => $this->getTranslations('full_name'),
            'title' => $this->getTranslations('title'),
            'bio' => $this->getTranslations('bio'),
            'image' => $this->getFirstMediaId('image'),
            'meta' => $this->getAllMeta()
        ];
    }
}
