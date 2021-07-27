<?php

namespace Modules\Page\Transformers;

use Illuminate\Http\Resources\Json\JsonResource;

class HistoryUiResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'title' => $this->title,
            'description' => $this->description,
            'meta' => $this->getUiMeta()
        ];
    }
}
