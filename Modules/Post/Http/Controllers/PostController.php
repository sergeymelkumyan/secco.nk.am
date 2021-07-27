<?php

namespace Modules\Post\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Post\Http\Requests\PostStoreRequest;
use Modules\Post\Http\Requests\PostUpdateRequest;
use Modules\Post\Models\Post;
use Modules\Post\Repositories\PostRepository;
use Modules\Post\Transformers\PostResource;
use Modules\Post\Transformers\PostsResource;

class PostController extends Controller
{
    private $postRepository;
    private $model;
    private $lists;

    public function __construct(PostRepository $postRepository, Post $post)
    {
        $this->postRepository = $postRepository;
        $this->model = $post;
    }

    public function index(Request $request)
    {
        $this->lists = $this->model
            ->newQuery()
            ->when($request->name, function ($query) use ($request) {
                return $query
                    ->where('title->hy', 'LIKE', '%' . $request->name . '%')
                    ->orWhere('title->ru', 'LIKE', '%' . $request->name . '%')
                    ->orWhere('title->en', 'LIKE', '%' . $request->name . '%');
            })
            ->orderByDesc('id')
            ->paginate();

        return PostsResource::collection($this->lists);
    }

    public function store(PostStoreRequest $request)
    {
        return new PostResource($this->postRepository->create($request->validated()));
    }

    public function show($id)
    {
        return new PostResource($this->postRepository->find($id));
    }

    public function update(PostUpdateRequest $request, $id)
    {
        return new PostResource($this->postRepository->update($request->validated(), $id));
    }

    public function destroy($id)
    {
        $this->postRepository->delete($id);
        return response()->json([], 200);
    }
}
