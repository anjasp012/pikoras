<?php

namespace App\Http\Resources\Admin;

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
            'id' => $this->id,
            'post_category_name' => $this->postCategory->post_category_name,
            'post_thumbnail' => '/storage/'.$this->post_thumbnail,
            'post_name' => $this->post_name,
            'created_at' => $this->created_at->format('d M Y'),
            'view_count' => $this->view_count
        ];
    }
}
