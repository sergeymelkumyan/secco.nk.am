<?php

namespace Modules\Post\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PostUpdateRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'type' => 'required|string',
            'title' => 'required|array',
            'short_description' => 'required|array',
            'description' => 'required|array',
            'date' => 'date',
            'image' => 'integer',
            'meta' => 'array'
        ];
    }
}
