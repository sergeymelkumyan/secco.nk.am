<?php

namespace Modules\Admin\Http\Controllers\Auth;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $credentials = [
            'email' => $request->input('email'),
            'password' => $request->input('password')
        ];

        $remember = $request->input('remember');

        if (Auth::attempt($credentials, $remember)) {
            return response()->json(['access_token' => Auth::user()->createToken('authToken')->accessToken]);
        } else {
            return response()->json(['message' => 'This action is unauthorized.'], 401);
        }
    }

    public function logout(Request $request)
    {
        try {
            $request->user()->token()->revoke();
            return response()->json([], 200);
        } catch (\Exception $e) {
            return response()->json([], 400);
        }
    }
}
