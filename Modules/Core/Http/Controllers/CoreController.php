<?php

namespace Modules\Core\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Storage;
use Modules\Core\Models\Media;

class CoreController extends Controller
{
    public function directories()
    {
        $directories = array_unique(Media::query()->pluck('directory')->all());
        return response()->json(['directories' => $directories]);
    }

    public function documentUpload(Request $request)
    {
        $file = Storage::disk('public')->put('/documents', $request->file('document'));
        return response()->json(['document' => '/storage/' . $file]);
    }
}
