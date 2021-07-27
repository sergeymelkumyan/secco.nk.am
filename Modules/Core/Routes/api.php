<?php


use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'admin'], function () {
    Route::get('directories', 'CoreController@directories');
    Route::apiResource('medias', 'MediaController');
    Route::post('document-upload','CoreController@documentUpload');
});
