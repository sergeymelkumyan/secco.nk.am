<?php


use Illuminate\Support\Facades\Route;


Route::group(['prefix' => 'admin'], function () {

    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('account', 'AccountController@index');
        Route::post('logout', 'Auth\LoginController@logout');
    });

    Route::group(['namespace' => 'Auth'], function () {
        Route::post('login', 'LoginController@login');
        Route::post('password/email', 'ForgotPasswordController@sendResetLinkEmail');
        Route::post('password/reset', 'ResetPasswordController@reset');
    });
});
