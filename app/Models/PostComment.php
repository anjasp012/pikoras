<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PostComment extends Model
{
    protected $guarded = ['id'];

    public function replies() {
        return $this->hasMany(PostComment::class, 'parent_id', 'id');
    }
}
