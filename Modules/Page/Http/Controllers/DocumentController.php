<?php

namespace Modules\Page\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Modules\Page\Models\Document;
use Modules\Page\Transformers\DocumentResource;

class DocumentController extends Controller
{
    public function index(Request $request)
    {
        $documents = Document::query()->paginate();
        return DocumentResource::collection($documents);
    }

    public function store(Request $request)
    {
        $document = new Document();
        $document->setTranslations('title', $request->title);
        $document->file = $request->file;
        $document->save();
    }

    public function show(Document $document)
    {
        return new DocumentResource($document);
    }

    public function update(Request $request, Document $document)
    {
        $document->setTranslations('title', $request->title);
        $document->file = $request->file;
        $document->save();
    }

    public function destroy(Document $document)
    {
        try {
            $document->delete();
            return response()->json([], 200);
        } catch (\Exception $exception) {
            return response()->json([], 400);
        }
    }
}
