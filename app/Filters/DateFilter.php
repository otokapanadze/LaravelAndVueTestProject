<?php


namespace App\Filters;


class DateFilter
{
    public function filter($builder, $value)
    {
        $value = (array) json_decode($value);

        if (isset($value['from']) && isset($value['to'])) {
            return $builder->whereBetween('created_at', [$value['from'], $value['to']]);
        }else if (isset($value['from'])) {
            return $builder->where('created_at', '>=', $value['from']);
        }elseif (isset($value['to'])) {
            return $builder->where('created_at', '<=', $value['to']);
        }
    }
}
