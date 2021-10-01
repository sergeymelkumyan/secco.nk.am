<?php

use Illuminate\Support\Facades\Route;

Route::view('/{any?}', 'ui::index')->where('any', '.*');
