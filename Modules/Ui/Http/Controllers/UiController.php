<?php

namespace Modules\Ui\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Gallery\Repositories\GalleryRepository;
use Modules\Gallery\Transformers\GalleryUiResource;
use Modules\Member\Models\Member;
use Modules\Member\Repositories\MemberRepository;
use Modules\Member\Transformers\MemberUiResource;
use Modules\Page\Models\About;
use Modules\Page\Models\Document;
use Modules\Page\Models\History;
use Modules\Page\Transformers\AboutUiResource;
use Modules\Page\Transformers\DocumentUiResource;
use Modules\Page\Transformers\HistoryUiResource;
use Modules\Post\Repositories\PostRepository;
use Modules\Post\Transformers\PostUiResource;

class UiController extends Controller
{
    private $postRepository;
    private $memberRepository;
    private $galleryRepository;

    public function __construct(
        PostRepository $postRepository,
        MemberRepository $memberRepository,
        GalleryRepository $galleryRepository
    )
    {
        $this->postRepository = $postRepository;
        $this->memberRepository = $memberRepository;
        $this->galleryRepository = $galleryRepository;
    }

    public function home()
    {
        $sliders = $this->postRepository->orderBy('date', 'desc')->limit(5)->get();

        $press = $this->postRepository->getByType('press', 3);
        $announcements = $this->postRepository->getByType('announcement', 3);
        $speeches = $this->postRepository->getByType('speeches', 3);
        $photos = $this->galleryRepository->where('type','image')->orderBy('id', 'desc')->limit(3)->get();
        $videos = $this->galleryRepository->where('type','video')->orderBy('id', 'desc')->limit(3)->get();

        return response()->json([
            'sliders' => PostUiResource::collection($sliders),
            'press' => PostUiResource::collection($press),
            'announcements' => PostUiResource::collection($announcements),
            'speeches' => PostUiResource::collection($speeches),
            'photos' => GalleryUiResource::collection($photos),
            'videos' => GalleryUiResource::collection($videos)
        ]);
    }

    public function about()
    {
        return new AboutUiResource(About::query()->first());
    }

    public function history()
    {
        return new HistoryUiResource(History::query()->first());
    }

    public function documents()
    {
        $documents = Document::query()->orderBy('id', 'desc')->get();
        return response()->json([
            'documents' => DocumentUiResource::collection($documents)
        ]);
//        return new DocumentUiResource(Document::query()->get());
    }

    public function members()
    {
        $member = $this->memberRepository->where('id','!=','1')->orderBy('number', 'desc')->get();
        return response()->json([
            'members' => MemberUiResource::collection($member)
        ]);
    }

    public function member($slug)
    {
        $member = $this->memberRepository->findByField('slug',$slug)->first();

        return response()->json([
            'member' => new MemberUiResource($member)
        ]);
    }

    public function posts(Request $request)
    {
        $posts = $this->postRepository->orderBy('date', 'desc')->findByField('type', $request->type);
        return response()->json([
            'posts' => PostUiResource::collection($posts)
        ]);
    }

    public function post($slug)
    {
        $post = $this->postRepository->findByField('slug', $slug)->first();
        $others = $this->postRepository->where('id', '!=', $post->id)->orderBy('date', 'desc')->limit(5)->get();
        return response()->json(
            [
                'post' => new PostUiResource($post),
                'others' => PostUiResource::collection($others),
            ]
        );
    }

    public function photos()
    {
        $photos = $this->galleryRepository->where('type','image')->orderBy('id', 'desc')->get();
        return response()->json(
            [
                'photos' => GalleryUiResource::collection($photos)
            ]
        );
    }
    public function photo($slug)
    {
        $photo = $this->galleryRepository->findByField('slug',$slug)->first();
        return response()->json([
            'photo' => new GalleryUiResource($photo)
        ]);
    }
    public function videos()
    {
        $videos = $this->galleryRepository->where('type','video')->orderBy('id', 'desc')->get();
        return response()->json(
            [
                'videos' => GalleryUiResource::collection($videos)
            ]
        );
    }



}
