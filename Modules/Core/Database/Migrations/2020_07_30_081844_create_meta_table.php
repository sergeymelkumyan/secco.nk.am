<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMetaTable extends Migration
{

    public function up()
    {
        Schema::create('meta', function (Blueprint $table) {
            $table->id();
            $table->morphs('metable');
            $table->string('type')->default('null');
            $table->string('key')->index();
            $table->longtext('value');
        });
    }

    public function down()
    {
        Schema::dropIfExists('meta');
    }
}
