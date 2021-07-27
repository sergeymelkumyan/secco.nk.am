<?php

namespace Modules\Page\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Page\Models\History;
use Modules\Page\Transformers\HistoryResource;

class HistoryController extends Controller
{

    private $model;

    public function __construct(History $history)
    {
        $this->model = $history;
    }

    public function index()
    {
        return new HistoryResource($this->model->first());
    }

    public function update(Request $request, $id)
    {
        $this->model = $this->model->find($id);
        $this->model->setTranslations('title', $request->title);
        $this->model->setTranslations('description', $request->description);
        $this->model->save();

        if ($request->has('meta')) {
            $this->model->syncMeta($request->meta);
        }

        return new HistoryResource($this->model);
    }
}
