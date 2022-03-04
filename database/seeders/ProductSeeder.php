<?php

namespace Database\Seeders;

use App\Models\Author;
use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Author::all()->each(function (Author $author) {
            Product::factory(5)->create([
                'author_id' => $author->id,
            ]);
        });
    }
}
