<?php

namespace Modules\Member\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MemberStoreRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'full_name' => 'required|array',
            'title' => 'required|array',
            'bio' => 'required|array',
            'image' => 'required|integer',
            'meta' => 'array'
        ];
    }
}
