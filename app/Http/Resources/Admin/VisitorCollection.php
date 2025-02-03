<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class VisitorCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public $loadDefault = 10;
    public function toArray(Request $request): array
    {
        return [
            'data' => $this->collection,
            'filtered' => [
                            'load' => $request->load ?? $this->loadDefault,
                            'q' => $request->q ?? '',
                            'page' => $request->page ?? 1,
                            'field' => $request->field ?? '',
                            'direction' => $request->direction ?? '',
                        ]
        ];
    }
}
