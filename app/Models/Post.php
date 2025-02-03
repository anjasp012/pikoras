<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $guarded = ['id'];

    public function postCategory() {
        return $this->belongsTo(PostCategory::class);
    }
    public function postComments() {
        return $this->hasMany(PostComment::class);
    }
}
