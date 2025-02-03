<?php

namespace App\Http\Controllers;

use App\Http\Resources\CommentCollection;
use App\Http\Resources\PostCollection;
use App\Models\Post;
use App\Models\PostCategory;
use App\Models\PostComment;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function index(Request $request) {
        $postCategories = PostCategory::all();
        $query = Post::query();
        if (isset($request->search)) {
            $query->where('post_name', '%'. $request->search . '%');
        }
        $posts = new PostCollection($query->paginate(11));
        $data = [
            'postCategories' => $postCategories,
            'posts' => $posts,
            'q' => $request->search ?? ''
        ];
        return inertia('Blog', $data);
    }

    public function byCategory(Request $request, $post_category_slug) {
        $postCategory = PostCategory::where('post_category_slug', $post_category_slug)->first();
        $postCategories = PostCategory::all();
        $posts = Post::query();
        if (isset($request->search)) {
            $posts->where('post_name', 'like','%'. $request->search . '%');
        }
        $data = [
            'postCategory' => $postCategory,
            'postCategories' => $postCategories,
            'posts' => new PostCollection($posts->where('post_category_id', $postCategory->id)->paginate(6)),
            'meta_title' => $postCategory->meta_title,
            'meta_keyword' => $postCategory->meta_keyword,
            'meta_description' => $postCategory->meta_description,
            'q' => $request->search ?? ''
        ];
        return inertia('BlogByCategory', $data);
    }
    public function detail($post_slug) {
        $postCategories = PostCategory::all();
        $article = Post::where('post_slug', $post_slug)->withCount(['postComments'])->first();
        $comments = new CommentCollection(PostComment::with(['replies'])->withCount(['replies'])->where('post_id', $article->id)->where('parent_id', NULL)->orderBy('created_at', 'desc')->paginate(5));
        $article->update(['view_count'=> $article->view_count + 1]);
        $data = [
            'postCategories' => $postCategories,
            'article' => $article,
            'comments' => $comments,
            'title' => $article->post_name,
            'meta_title' => $article->meta_title,
            'meta_keyword' => $article->meta_keyword,
            'meta_description' => $article->meta_description,
        ];
        return inertia('BlogDetail', $data);
    }
}
