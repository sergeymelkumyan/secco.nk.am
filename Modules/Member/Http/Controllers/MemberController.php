<?php

namespace Modules\Member\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Member\Http\Requests\MemberStoreRequest;
use Modules\Member\Http\Requests\MemberUpdateRequest;
use Modules\Member\Models\Member;
use Modules\Member\Repositories\MemberRepository;
use Modules\Member\Transformers\MemberResource;

class MemberController extends Controller
{
    private $memberRepository;
    private $model;
    private $lists;

    public function __construct(MemberRepository $memberRepository, Member $member)
    {
        $this->memberRepository = $memberRepository;
        $this->model = $member;
    }

    public function index(Request $request)
    {
        $this->lists = $this->model
            ->newQuery()
            ->when($request->name, function ($query) use ($request) {
                return $query
                    ->where('full_name->hy', 'LIKE', '%' . $request->name . '%')
                    ->orWhere('full_name->ru', 'LIKE', '%' . $request->name . '%')
                    ->orWhere('full_name->en', 'LIKE', '%' . $request->name . '%');
            })
            ->orderByDesc('id')
            ->paginate();

        return MemberResource::collection($this->lists);
    }

    public function store(MemberStoreRequest $request)
    {
        return new MemberResource($this->memberRepository->create($request->validated()));
    }

    public function show($id)
    {
        return new MemberResource($this->memberRepository->find($id));
    }

    public function update(MemberUpdateRequest $request, $id)
    {
        return new MemberResource($this->memberRepository->update($request->validated(), $id));
    }

    public function destroy($id)
    {
        $this->memberRepository->delete($id);
        return response()->json([], 200);
    }
}
