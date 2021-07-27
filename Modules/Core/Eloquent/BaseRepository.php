<?php


namespace Modules\Core\Eloquent;

use Illuminate\Container\Container as Application;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;

abstract class BaseRepository implements RepositoryInterface
{
    protected $app;
    protected $model;
    protected $scopeQuery = null;

    public function __construct(Application $app)
    {
        $this->app = $app;
        $this->makeModel();
        $this->boot();
    }

    public function boot()
    {
    }

    abstract public function model();

    public function resetModel()
    {
        $this->makeModel();
    }

    public function makeModel()
    {
        $model = $this->app->make($this->model());
        return $this->model = $model;
    }

    public function scopeQuery(\Closure $scope)
    {
        $this->scopeQuery = $scope;

        return $this;
    }

    public function lists($column, $key = null)
    {
        return $this->model->lists($column, $key);
    }

    public function pluck($column, $key = null)
    {
        return $this->model->pluck($column, $key);
    }

    public function sync($id, $relation, $attributes, $detaching = true)
    {
        return $this->find($id)->{$relation}()->sync($attributes, $detaching);
    }

    public function syncWithoutDetaching($id, $relation, $attributes)
    {
        return $this->sync($id, $relation, $attributes, false);
    }

    public function all($columns = ['*'])
    {
        $this->applyScope();

        if ($this->model instanceof Builder) {
            $results = $this->model->get($columns);
        } else {
            $results = $this->model->all($columns);
        }

        $this->resetModel();

        $this->resetScope();

        return $this->parserResult($results);
    }

    public function count(array $where = [], $columns = '*')
    {
        $this->applyScope();

        if ($where) {
            $this->applyConditions($where);
        }

        $result = $this->model->count($columns);

        $this->resetModel();

        $this->resetScope();

        return $result;
    }

    public function get($columns = ['*'])
    {
        return $this->all($columns);
    }

    public function first($columns = ['*'])
    {
        $this->applyScope();

        $results = $this->model->first($columns);

        $this->resetModel();

        return $this->parserResult($results);
    }

    public function firstOrNew(array $attributes = [])
    {
        $this->applyScope();

        $model = $this->model->firstOrNew($attributes);

        $this->resetModel();

        return $this->parserResult($model);
    }

    public function firstOrCreate(array $attributes = [])
    {
        $this->applyScope();

        $model = $this->model->firstOrCreate($attributes);

        $this->resetModel();

        return $this->parserResult($model);
    }


    public function limit($limit)
    {
        $this->applyScope();

        $results = $this->model->limit($limit);

        $this->resetModel();

        return $this->parserResult($results);
    }


    public function paginate($limit = null, $columns = ['*'], $method = "paginate")
    {

        $this->applyScope();

        $limit = is_null($limit) ? 10 : $limit;

        $results = $this->model->{$method}($limit, $columns);

        $results->appends(app('request')->query());

        $this->resetModel();

        return $this->parserResult($results);
    }


    public function simplePaginate($limit = null, $columns = ['*'])
    {
        return $this->paginate($limit, $columns, "simplePaginate");
    }

    public function find($id, $columns = ['*'])
    {
        $this->applyScope();

        $model = $this->model->findOrFail($id, $columns);

        $this->resetModel();

        return $this->parserResult($model);
    }

    public function findByField($field, $value = null, $columns = ['*'])
    {
        $this->applyScope();

        $model = $this->model->where($field, '=', $value)->get($columns);

        $this->resetModel();

        return $this->parserResult($model);
    }

    public function findWhere(array $where, $columns = ['*'])
    {
        $this->applyScope();

        $this->applyConditions($where);

        $model = $this->model->get($columns);

        $this->resetModel();

        return $this->parserResult($model);
    }

    public function findWhereIn($field, array $values, $columns = ['*'])
    {
        $this->applyScope();

        $model = $this->model->whereIn($field, $values)->get($columns);

        $this->resetModel();

        return $this->parserResult($model);
    }

    public function findWhereNotIn($field, array $values, $columns = ['*'])
    {
        $this->applyScope();

        $model = $this->model->whereNotIn($field, $values)->get($columns);

        $this->resetModel();

        return $this->parserResult($model);
    }

    public function findWhereBetween($field, array $values, $columns = ['*'])
    {
        $this->applyScope();

        $model = $this->model->whereBetween($field, $values)->get($columns);

        $this->resetModel();

        return $this->parserResult($model);
    }

    public function create(array $attributes)
    {
        $model = $this->model->newInstance($attributes);

        $model->save();

        $this->resetModel();

        return $this->parserResult($model);
    }

    public function update(array $attributes, $id)
    {
        $this->applyScope();

        $model = $this->model->findOrFail($id);

        $model->fill($attributes);

        $model->save();

        $this->resetModel();

        return $this->parserResult($model);
    }

    public function updateOrCreate(array $attributes, array $values = [])
    {
        $this->applyScope();

        $model = $this->model->updateOrCreate($attributes, $values);

        $this->resetModel();

        return $this->parserResult($model);
    }

    public function delete($id)
    {
        $this->applyScope();

        $model = $this->find($id);

        $this->resetModel();

        return $model->delete();
    }

    public function deleteWhere(array $where)
    {
        $this->applyScope();

        $this->applyConditions($where);

        $deleted = $this->model->delete();

        $this->resetModel();

        return $deleted;
    }

    public function has($relation)
    {
        $this->model = $this->model->has($relation);
        return $this;
    }

    public function with($relations)
    {
        $this->model = $this->model->with($relations);
        return $this;
    }

    public function withCount($relations)
    {
        $this->model = $this->model->withCount($relations);
        return $this;
    }

    public function whereHas($relation, $closure)
    {
        $this->model = $this->model->whereHas($relation, $closure);
        return $this;
    }

    public function orderBy($column, $direction = 'asc')
    {
        $this->model = $this->model->orderBy($column, $direction);
        return $this;
    }

    public function visible(array $fields)
    {
        $this->model->setVisible($fields);
        return $this;
    }

    public function hidden(array $fields)
    {
        $this->model->setHidden($fields);
        return $this;
    }

    public function resetScope()
    {
        $this->scopeQuery = null;
        return $this;
    }

    protected function applyScope()
    {
        if (isset($this->scopeQuery) && is_callable($this->scopeQuery)) {
            $callback = $this->scopeQuery;
            $this->model = $callback($this->model);
        }

        return $this;
    }

    protected function applyConditions(array $where)
    {
        foreach ($where as $field => $value) {
            if (is_array($value)) {
                list($field, $condition, $val) = $value;
                $this->model = $this->model->where($field, $condition, $val);
            } else {
                $this->model = $this->model->where($field, '=', $value);
            }
        }
    }

    public function parserResult($result)
    {
//        if ($result instanceof Collection || $result instanceof LengthAwarePaginator) {
//            return new Collection($result);
//        }

        return $result;
    }

    public static function __callStatic($method, $arguments)
    {
        return call_user_func_array([new static(), $method], $arguments);
    }

    public function __call($method, $arguments)
    {
        $this->applyScope();
        return call_user_func_array([$this->model, $method], $arguments);
    }

}
