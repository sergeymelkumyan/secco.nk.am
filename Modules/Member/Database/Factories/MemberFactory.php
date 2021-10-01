<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use Faker\Generator as Faker;

$factory->define(\Modules\Member\Models\Member::class, function (Faker $faker) {
    return [
        'full_name' => $faker->firstName . $faker->lastName,
        'title' => $faker->title,
        'bio' => $faker->text
    ];
});
