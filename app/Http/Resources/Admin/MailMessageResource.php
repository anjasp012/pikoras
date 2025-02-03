<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MailMessageResource extends JsonResource
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
            'topic' => $this->topic,
            'name' => $this->name,
            'email' => $this->email,
            'description' => $this->description,
            'is_read' => $this->is_read,
            'created_at' => $this->created_at->format('d M Y')
        ];
    }
}
