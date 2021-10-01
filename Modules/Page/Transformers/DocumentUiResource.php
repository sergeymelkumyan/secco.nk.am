<?php

namespace Modules\Page\Transformers;

use Illuminate\Http\Resources\Json\JsonResource;

class DocumentUiResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'title' => $this->title,
            'file' => $this->file
        ];
    }
}
