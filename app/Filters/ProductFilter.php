<?php

namespace App\Filters;

class ProductFilter extends AbstractFilter
{
    protected array $filters = [
        'name' => NameFilter::class,
        'author' => AuthorFilter::class,
        'date' => DateFilter::class,
    ];
}
