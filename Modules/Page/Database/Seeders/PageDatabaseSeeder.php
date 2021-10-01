<?php

namespace Modules\Page\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Modules\Page\Models\About;
use Modules\Page\Models\History;

class PageDatabaseSeeder extends Seeder
{

    public function run()
    {
        Model::unguard();

        About::query()->create([
            'title' => 'Title',
            'description' => 'Content'
        ]);

        History::query()->create([
            'title' => 'Title',
            'description' => 'Content'
        ]);
    }
}
