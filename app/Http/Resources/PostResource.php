<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'post_category_name' => $this->postCategory->post_category_name,
            'post_thumbnail' => '/storage/'.$this->post_thumbnail,
            'post_name' => $this->post_name,
            'post_slug' => $this->post_slug,
            'post_content' => $this->post_content,
            'created_at' => $this->created_at->format('d M Y'),
        ];
    }
}
