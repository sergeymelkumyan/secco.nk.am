<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use Faker\Generator as Faker;

$factory->define(\Modules\Post\Models\Post::class, function (Faker $faker) {
    return [
        'type' => $faker->randomElement(config('post.type')),
        'title' => $faker->sentence,
        'description' => $faker->text,
        'short_description' => $faker->text,
    ];
});
