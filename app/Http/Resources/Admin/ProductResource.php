<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
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
            'product_category_name' => $this->productCategory->product_category_name,
            'product_thumbnail' => '/storage/'.$this->product_thumbnail,
            'product_name' => $this->product_name,
            'created_at' => $this->created_at->format('d M Y'),
            'view_count' => $this->view_count ?? 0,
            'best_seller' => $this->best_seller
        ];
    }
}
