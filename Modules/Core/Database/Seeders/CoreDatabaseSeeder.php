<?php

namespace Modules\Core\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class CoreDatabaseSeeder extends Seeder
{

    public function run()
    {
        Model::unguard();
        $this->call(UsersTableSeeder::class);
    }
}
