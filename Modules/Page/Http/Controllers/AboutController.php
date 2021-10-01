<?php

namespace Modules\Page\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Page\Models\About;
use Modules\Page\Transformers\AboutResource;

class AboutController extends Controller
{
    private $model;

    public function __construct(About $about)
    {
        $this->model = $about;
    }

    public function index()
    {
        return new AboutResource($this->model->first());
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
        return new AboutResource($this->model);
    }
}
