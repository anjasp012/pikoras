<?php

namespace App\Http\Controllers\Admin;

use App\Models\Post;
use Illuminate\Support\Str;
use App\Models\PostCategory;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\PostCollection;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Post::query();
        if ($request->q) {
            $query->where('post_name', 'like', '%' . $request->q. '%');
        }
        // $query->orderBy('post_name', 'asc');

        if (isset($request->field) && isset($request->direction)) {
            $query->orderBy($request->field, $request->direction);
        }

        $posts = new PostCollection($query->paginate($request->load));
        $data = [
            'posts' => $posts
        ];
        return inertia('Admin/Post/Index', $data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $data = [
            'postCategories' => PostCategory::get(),
        ];
        return inertia('Admin/Post/Create', $data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $inputValues = $request->validate([
            'post_category_id'=> 'required',
            'post_thumbnail'=> 'required',
            'post_name'=> 'required',
            'post_content'=> 'required',
            'meta_title'=> 'nullable',
            'meta_keyword'=> 'nullable',
            'meta_description'=> 'nullable',
        ]);
        if ($request->has('post_thumbnail')) {
            $postThumbnail = $request->post_thumbnail->store('/images/post/thumbnail', 'public');
        } else {
            abort(404);
        }
        $postCategory = PostCategory::where('post_category_name', $request->post_category_id)->first();
        $inputValues['post_slug'] = Str::slug($inputValues['post_name']);
        $inputValues['post_category_id'] = $postCategory->id;
        $inputValues['post_thumbnail'] = $postThumbnail;
        $inputValues['view_count'] = 0;
        Post::create($inputValues);
        return to_route('admin.post.index')->with('success', 'Post create successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $post = Post::with(['postCategory'])->find($id);
        $data = [
            'post' => $post,
        ];
        return inertia('Admin/Post/Show', $data);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $post = Post::with(['postCategory'])->find($id);
        $data = [
            'post' => $post,
            'postCategories' => PostCategory::get(),
        ];
        return inertia('Admin/Post/Edit', $data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $post = Post::find($id);
        $inputValues = $request->validate([
            'post_category_id'=> 'required',
            'post_thumbnail'=> 'nullable',
            'post_name'=> 'required',
            'post_content'=> 'required',
            'meta_title'=> 'nullable',
            'meta_keyword'=> 'nullable',
            'meta_description'=> 'nullable',
        ]);
        if ($request->post_thumbnail != null) {
            $postThumbnail = $request->post_thumbnail->store('/images/post/thumbnail', 'public');
        } else {
            $postThumbnail = $post->post_thumbnail;
        }
        $postCategory = PostCategory::where('post_category_name', $request->post_category_id)->first();
        $inputValues['post_slug'] = Str::slug($inputValues['post_name']);
        $inputValues['post_category_id'] = $postCategory->id;
        $inputValues['post_thumbnail'] = $postThumbnail;
        $post->update($inputValues);
        return to_route('admin.post.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $post = Post::findOrFail($id);
            $post->delete();
            return back()->with('success', 'Post delete successfully!');
        } catch (\Exception $e) {
            return back()->with('error', 'An error occurred, please try again later');
        }
    }
}
