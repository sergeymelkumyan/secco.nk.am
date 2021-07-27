<?php

namespace Modules\Core\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Modules\Core\Helpers\MediaUploader;
use Modules\Core\Models\Media;
use Modules\Core\Transformers\MediaResource;

class MediaController extends Controller
{

    public function index(Request $request)
    {
        $medias = Media::query()->where('directory', $request->input('directory'));

        if ($request->name) {
            $medias->where('name', 'LIKE', '%' . $request->name . '%');
        }

        if ($request->start_date || $request->end_date) {
            $medias->whereBetween('created_at', [$request->start_date, $request->end_date]);
        }

        return MediaResource::collection($medias->orderByDesc('id')->get());
    }


    public function store(Request $request)
    {
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $media = MediaUploader::fromFile($file)->upload($request->header()['directory'][0]);
            return new MediaResource($media);
        } else {
            $file = $request->file('upload');
            $file_name = uniqid() . '.' . $file->getClientOriginalExtension();
            Storage::disk('public')->putFileAs('/editor/', $file, $file_name);


            return response()->json([
                'uploaded' => 1,
                'file_name' => '/storage/editor/' . $file_name,
                'url' => '/storage/editor/' . $file_name
            ]);
        }
    }


    public function show(Media $media)
    {
        return new MediaResource($media);
    }


    public function update(Request $request, Media $media)
    {
        $media->fill($request->all());
        $media->save();
        return new MediaResource($media);
    }


    public function destroy(Media $media)
    {
        try {
            File::delete(public_path($media->file_name));
            $media->delete();
            return response()->json([], 200);
        } catch (\Exception $exception) {
            return response()->json([], 400);
        }
    }
}
