<?php

namespace App\Http\Resources;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ReplyResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'avatar' => Str::upper(Str::substr($this->your_name, 0, 2)),
            'your_name' => $this->your_name,
            'your_comment' => $this->your_comment,
            'created_at' => $this->created_at->diffForHumans(),
        ];
    }
}
