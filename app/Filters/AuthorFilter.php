<?php


namespace App\Filters;

class AuthorFilter {

    public function filter($builder, $value)
    {
        return $builder->where('author_id', $value);
    }
}
