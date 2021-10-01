<?php

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'admin', 'middleware' => 'auth:api'], function () {
    Route::apiResource('posts', 'PostController');
});
