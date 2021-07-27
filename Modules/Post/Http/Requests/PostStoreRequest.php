<?php

namespace Modules\Post\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PostStoreRequest extends FormRequest
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
            'image' => 'required|integer',
            'meta' => 'array'
        ];
    }

}
