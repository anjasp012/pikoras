<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $guarded = ['id'];

    public function productCategory() {
        return $this->belongsTo(ProductCategory::class);
    }
    public function productVariants() {
        return $this->hasMany(ProductVariant::class, 'product_id', 'id');
    }
}
