<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMediaTable extends Migration
{
    public function up()
    {
        Schema::create('media', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('file_name');
            $table->string('disk');
            $table->string('directory');
            $table->string('mime_type');
            $table->unsignedInteger('size');
            $table->string('alt')->nullable();
            $table->timestamps();
        });

        Schema::create('mediables', function (Blueprint $table) {
            $table->unsignedBigInteger('media_id');
            $table->morphs('mediable');
            $table->string('group');
        });
    }

    public function down()
    {
        Schema::dropIfExists('mediables');
        Schema::dropIfExists('media');
    }
}
