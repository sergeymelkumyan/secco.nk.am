<?php

namespace Modules\Gallery\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class GalleryUpdateRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'title' => 'required|array',
            'type' => 'required|string',
            'video_url' => 'string',
            'image' => 'array'
        ];
    }

}
