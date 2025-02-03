<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class VisitorResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'ip_address' => $this->ip_address,
            'device' => $this->device,
            'browser' => $this->browser,
            'url' => $this->url,
            'referrer' => $this->referrer,
            'created_at' => $this->created_at->format('d M Y'),
        ];
    }
}
