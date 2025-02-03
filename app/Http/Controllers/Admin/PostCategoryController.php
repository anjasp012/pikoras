<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Support\Str;
use App\Models\PostCategory;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\PostCategoryCollection;

class PostCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = PostCategory::query();
        if ($request->q) {
            $query->where('post_name', 'like', '%' . $request->q. '%');
        }
        // $query->orderBy('product_name', 'asc');

        if (isset($request->field) && isset($request->direction)) {
            $query->orderBy($request->field, $request->direction);
        }

        $postCategories = new PostCategoryCollection($query->paginate($request->load));
        $data = [
            'postCategories' => $postCategories,
        ];
        return inertia('Admin/PostCategory/Index', $data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Admin/PostCategory/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $inputValues = $request->validate([
            'post_category_name'=> 'required',
            'meta_title'=> 'nullable',
            'meta_keyword'=> 'nullable',
            'meta_description'=> 'nullable',
        ]);
        $inputValues['post_category_slug'] = Str::slug($inputValues['post_category_name']);
        PostCategory::create($inputValues);
        return to_route('admin.post-category.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $postCategory = PostCategory::find($id);
        $data = [
            'postCategory' => $postCategory
        ];
        return inertia('Admin/PostCategory/Show', $data);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $postCategory = PostCategory::find($id);
        $data = [
            'postCategory' => $postCategory
        ];
        return inertia('Admin/PostCategory/Edit', $data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $postCategory = PostCategory::find($id);
        $inputValues = $request->validate([
            'post_category_name'=> 'required',
            'meta_title'=> 'nullable',
            'meta_keyword'=> 'nullable',
            'meta_description'=> 'nullable',
        ]);
        $inputValues['post_category_slug'] = Str::slug($inputValues['post_category_name']);
        $postCategory->update($inputValues);
        return to_route('admin.post-category.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $postCategory = PostCategory::find($id);
        $postCategory->delete();
        return back();
    }
}
