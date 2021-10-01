<?php

namespace Modules\Member\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Modules\Member\Models\Member;

class MemberDatabaseSeeder extends Seeder
{
    public function run()
    {
        Model::unguard();
        factory(Member::class, 20)->create();
    }
}
