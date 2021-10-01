<?php

namespace Modules\Core\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Modules\Core\Models\User;

class UsersTableSeeder extends Seeder
{

    public function run()
    {
        DB::table('users')->delete();
        DB::table('roles')->delete();

        User::query()->create([
            'name' => 'Secco Admin',
            'email' => 'admin@secco.nkr.am',
            'email_verified_at' => now(),
            'password' => bcrypt('>5qZkk9f~hJ'),
            'role_id' => 1,
        ]);


        DB::table('roles')->insert([
            'id' => 1,
            'name' => 'admin',
            'display_name' => 'Administrator'
        ]);

    }
}
