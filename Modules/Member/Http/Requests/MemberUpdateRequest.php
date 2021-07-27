<?php

namespace Modules\Member\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MemberUpdateRequest extends FormRequest
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
            'image' => 'integer',
            'meta' => 'array'
        ];
    }
}
