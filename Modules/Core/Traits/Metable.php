<?php


namespace Modules\Core\Traits;


use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Query\JoinClause;
use Modules\Core\Models\Meta;


trait Metable
{

    private $indexedMetaCollection;


    public static function bootMetable()
    {
        static::deleted(function (self $model) {
            $model->purgeMeta();
        });
    }


    public function meta(): MorphMany
    {
        return $this->morphMany($this->getMetaClassName(), 'metable');
    }

    public function setMeta(string $key, $value): void
    {
        if ($this->hasMeta($key)) {
            $meta = $this->getMetaRecord($key);
            $meta->setAttribute('value', $value);
            $meta->save();
        } else {
            $meta = $this->makeMeta($key, $value);
            $this->meta()->save($meta);
        }

        if ($this->relationLoaded('meta')) {
            $this->meta[] = $meta;
            $this->indexedMetaCollection[$key] = $meta;
        }
    }

    public function syncMeta($array): void
    {
        $meta = [];

        foreach ($array as $key => $value) {
            $meta[$key] = $this->makeMeta($key, $value);
        }

        $this->meta()->delete();
        $this->meta()->saveMany($meta);

        $collection = $this->makeMeta()->newCollection($meta);
        $this->setRelation('meta', $collection);
    }


    public function getMeta(string $key, $default = null)
    {
        if ($this->hasMeta($key)) {
            return $this->getMetaRecord($key)->getAttribute('value');
        }

        return $default;
    }


    public function getUiMeta()
    {
        return $this->getMetaCollection()->toBase()->map(function (Meta $meta) {
            return $meta->value;
        });
    }

    public function getAllMeta(): \Illuminate\Support\Collection
    {
        return $this->getMetaCollection()->toBase()->map(function (Meta $meta) {
            return $meta->getTranslations('value');
        });
    }

    public function hasMeta(string $key): bool
    {
        return $this->getMetaCollection()->has($key);
    }


    public function removeMeta(string $key): void
    {
        $this->getMetaCollection()->pull($key)->delete();
    }


    public function purgeMeta(): void
    {
        $this->meta()->delete();
        $this->setRelation('meta', $this->makeMeta()->newCollection([]));
    }


    public function getMetaRecord(string $key): ?Meta
    {
        return $this->getMetaCollection()->get($key);
    }


    public function scopeWhereHasMeta(Builder $q, $key): void
    {
        $q->whereHas('meta', function (Builder $q) use ($key) {
            $q->whereIn('key', (array)$key);
        });
    }


    public function scopeWhereDoesntHaveMeta(Builder $q, $key): void
    {
        $q->whereDoesntHave('meta', function (Builder $q) use ($key) {
            $q->whereIn('key', (array)$key);
        });
    }


    public function scopeWhereHasMetaKeys(Builder $q, array $keys): void
    {
        $q->whereHas(
            'meta',
            function (Builder $q) use ($keys) {
                $q->whereIn('key', $keys);
            },
            '=',
            count($keys)
        );
    }

    public function scopeWhereMeta(Builder $q, string $key, $operator, $value = null): void
    {
        if (!isset($value)) {
            $value = $operator;
            $operator = '=';
        }

        if (!is_string($value)) {
            $value = $this->makeMeta($key, $value)->getRawValue();
        }

        $q->whereHas('meta', function (Builder $q) use ($key, $operator, $value) {
            $q->where('key', $key);
            $q->where('value', $operator, $value);
        });
    }


    public function scopeWhereMetaNumeric(Builder $q, string $key, string $operator, $value): void
    {
        $validOperators = ['<', '<=', '>', '>=', '=', '<>', '!='];
        $operator = in_array($operator, $validOperators) ? $operator : '=';
        $field = $q->getQuery()
            ->getGrammar()
            ->wrap($this->meta()->getRelated()->getTable() . '.value');

        $q->whereHas('meta', function (Builder $q) use ($key, $operator, $value, $field) {
            $q->where('key', $key);
            $q->whereRaw("cast({$field} as decimal) {$operator} ?", [(float)$value]);
        });
    }


    public function scopeWhereMetaIn(Builder $q, string $key, array $values): void
    {
        $values = array_map(function ($val) use ($key) {
            return is_string($val) ? $val : $this->makeMeta($key, $val)->getRawValue();
        }, $values);

        $q->whereHas('meta', function (Builder $q) use ($key, $values) {
            $q->where('key', $key);
            $q->whereIn('value', $values);
        });
    }


    public function scopeOrderByMeta(
        Builder $q,
        string $key,
        string $direction = 'asc',
        bool $strict = false
    ): void
    {
        $table = $this->joinMetaTable($q, $key, $strict ? 'inner' : 'left');
        $q->orderBy("{$table}.value", $direction);
    }


    public function scopeOrderByMetaNumeric(
        Builder $q,
        string $key,
        string $direction = 'asc',
        bool $strict = false
    ): void
    {
        $table = $this->joinMetaTable($q, $key, $strict ? 'inner' : 'left');
        $direction = strtolower($direction) == 'asc' ? 'asc' : 'desc';
        $field = $q->getQuery()->getGrammar()->wrap("{$table}.value");

        $q->orderByRaw("cast({$field} as decimal) $direction");
    }


    private function joinMetaTable(Builder $q, string $key, $type = 'left'): string
    {
        $relation = $this->meta();
        $metaTable = $relation->getRelated()->getTable();

        $alias = $metaTable . '__' . $key;
        if (!$q->getQuery()->columns) {
            $q->select($this->getTable() . '.*');
        }

        $q->join("{$metaTable} as {$alias}", function (JoinClause $q) use ($relation, $key, $alias) {
            $q->on($relation->getQualifiedParentKeyName(), '=', $alias . '.' . $relation->getForeignKeyName())
                ->where($alias . '.key', '=', $key)
                ->where($alias . '.' . $relation->getMorphType(), '=', $this->getMorphClass());
        }, null, null, $type);

        return $alias;
    }


    private function getMetaCollection()
    {
        if (!$this->relationLoaded('meta')) {
            $this->setRelation('meta', $this->meta()->get());
        }

        return $this->indexedMetaCollection;
    }


    public function setRelation($relation, $value)
    {
        if ($relation == 'meta') {
            $this->indexedMetaCollection = $value->keyBy('key');
        }

        return parent::setRelation($relation, $value);
    }

    public function setRelations(array $relations)
    {
        if (isset($relations['meta'])) {
            $this->indexedMetaCollection = (new Collection($relations['meta']))->keyBy('key');
        } else {
            $this->indexedMetaCollection = $this->makeMeta()->newCollection();
        }

        return parent::setRelations($relations);
    }


    protected function getMetaClassName(): string
    {
        return Meta::class;
    }

    protected function makeMeta(string $key = '', $value = ''): Meta
    {
        $className = $this->getMetaClassName();

        $meta = new $className([
            'key' => $key,
            'value' => $value,
        ]);

        return $meta;
    }
}
