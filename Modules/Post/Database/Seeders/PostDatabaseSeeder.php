<?php

namespace Modules\Post\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Modules\Post\Models\Post;

class PostDatabaseSeeder extends Seeder
{
    public function run()
    {
        Model::unguard();
        factory(Post::class, 50)->create();
    }
}
