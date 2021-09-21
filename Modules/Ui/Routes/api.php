<?php

use Illuminate\Support\Facades\Route;

Route::get('home', 'UiController@home');
Route::get('about', 'UiController@about');
Route::get('history', 'UiController@history');
Route::get('sergey', 'UiController@sergey');
Route::get('documents', 'UiController@documents');
Route::get('photos', 'UiController@photos');
Route::get('photo/{slug}', 'UiController@photo');
Route::get('videos', 'UiController@videos');
Route::get('posts/{type?}', 'UiController@posts');
Route::get('post/{slug}', 'UiController@post');
Route::get('members','UiController@members');
Route::get('member/{slug}','UiController@member');
