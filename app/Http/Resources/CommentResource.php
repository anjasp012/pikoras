<?php

namespace App\Http\Resources;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Resources\ReplyResource;
use Illuminate\Http\Resources\Json\JsonResource;

class CommentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'avatar' => Str::upper(Str::substr($this->your_name, 0, 2)),
            'your_name' => $this->your_name,
            'your_comment' => $this->your_comment,
            'replies_count' => $this->replies_count,
            'created_at' => $this->created_at->diffForHumans(),
            'replies' => ReplyResource::collection($this->replies)
        ];
    }
}
