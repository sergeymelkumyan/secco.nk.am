<?php

use Illuminate\Support\Facades\Route;

Route::view('/admin/{any?}', 'admin::index')->where('any', '.*');
