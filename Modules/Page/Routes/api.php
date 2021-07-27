<?php

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'admin', 'middleware' => 'auth:api'], function () {
    Route::apiResource('abouts', 'AboutController')->only(['index', 'update']);
    Route::apiResource('histories', 'HistoryController')->only(['index', 'update']);
    Route::apiResource('documents', 'DocumentController');
});
