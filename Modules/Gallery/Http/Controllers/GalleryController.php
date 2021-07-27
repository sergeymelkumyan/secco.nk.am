<?php

namespace Modules\Gallery\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Gallery\Http\Requests\GalleryStoreRequest;
use Modules\Gallery\Http\Requests\GalleryUpdateRequest;
use Modules\Gallery\Models\Gallery;
use Modules\Gallery\Transformers\GalleryResource;

class GalleryController extends Controller
{
    public function index(Request $request)
    {
        $galleries = Gallery::query()->paginate();
        return GalleryResource::collection($galleries);
    }


    public function store(GalleryStoreRequest $request)
    {
        $gallery = Gallery::query()->create($request->validated());
        if ($request->has('main_image')) {
            $gallery->attachMedia($request->main_image, 'main_image');
        }
        if ($request->has('image')) {
            $gallery->attachMedia($request->image, 'gallery');
        }
        return response()->json([], 200);
    }


    public function show(Gallery $gallery)
    {
        return new GalleryResource($gallery);
    }

    public function update(GalleryUpdateRequest $request, Gallery $gallery)
    {
        $gallery->update($request->validated());
        if ($request->has('main_image')) {
            $gallery->attachMedia($request->main_image, 'main_image');
        }
        if ($request->has('image')) {
            $gallery->attachMedia($request->image, 'gallery');
        }
        return response()->json([], 200);
    }

    public function destroy(Gallery $gallery)
    {
        try {
            $gallery->delete();
            return response()->json([], 200);
        } catch (\Exception $exception) {
            return response()->json([], 400);
        }
    }
}
