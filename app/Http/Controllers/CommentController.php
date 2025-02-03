<?php

namespace App\Http\Controllers;

use App\Models\PostComment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function store(Request $request) {
        $inputValues = $request->validate([
            'post_id' => 'required',
            'your_name' => 'required',
            'your_comment' => 'required',
            'parent_id' => 'nullable'
        ]);
        PostComment::create($inputValues);
        return back()->with('success', 'Komentar disimpan');
    }
}
