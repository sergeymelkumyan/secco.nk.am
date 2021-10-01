<?php

namespace Modules\Admin\Http\Controllers\Auth;

use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;


class ForgotPasswordController extends Controller
{
    use SendsPasswordResetEmails;

    protected function sendResetLinkResponse(Request $request, $response)
    {
        return response(['message' => $response]);
    }

    protected function sendResetLinkFailedResponse(Request $request, $response)
    {
        return response(['error' => $response], 422);
    }
}
