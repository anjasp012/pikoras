<?php

namespace App\Http\Controllers\Admin;

use App\Models\Product;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\ProductCategory;
use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\ProductCollection;
use App\Http\Resources\Admin\ProductResource;
use App\Models\ProductVariant;
use Illuminate\Support\Facades\Log;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Product::query();
        if ($request->q) {
            $query->where('product_name', 'like', '%' . $request->q. '%');
        }
        if (isset($request->field) && isset($request->direction)) {
            $query->orderBy($request->field, $request->direction);
        }

        $products = new ProductCollection($query->paginate($request->load));
        $data = [
            'products' => $products
        ];
        return inertia('Admin/Product/Index', $data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $data = [
            'productCategories' => ProductCategory::get(),
        ];
        return inertia('Admin/Product/Create', $data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'product_name' => 'required',
            'product_description' => 'required',
            'link_shopee' => 'nullable',
            'link_tokopedia' => 'nullable',
            'link_lazada' => 'nullable',
            'product_thumbnail' => 'required',
            'product_variants' => 'nullable|array',
        ]);
        if ($request->has('product_thumbnail')) {
            $productThumbnail = $request->product_thumbnail->store('/images/product/thumbnail', 'public');
        }
        $productCategory = ProductCategory::where('product_category_name', $request->product_category_id)->first();
        $product = Product::create([
            'product_category_id' => $productCategory->id,
            'product_name' => $request->product_name,
            'product_slug' => Str::slug($request->product_name),
            'product_description' => $request->product_description,
            'link_shopee' => $request->link_shopee,
            'link_tokopedia' => $request->link_tokopedia,
            'link_lazada' => $request->link_lazada,
            'product_thumbnail' => $productThumbnail,
            'meta_title' => $request->meta_title,
            'meta_description' => $request->meta_description,
        ]);
        foreach ($request->product_variants as $product_variant) {
            if ($product_variant['product_variant_image'] !== null) {
                $productVariant = $product_variant['product_variant_image']->store('/images/product/variant', 'public');
                ProductVariant::create([
                    'product_id' => $product->id,
                    'product_variant_color' => $product_variant['product_variant_color'],
                    'product_variant_image' => $productVariant,
                ]);
            }
        }
        return to_route('admin.product.index')->with('success', 'Product create successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $product = Product::with(['productCategory'])->find($id);
        $data = [
            'product' => $product,
            'productCategories' => ProductCategory::get(),
        ];
        return inertia('Admin/Product/Show', $data);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $product = Product::with(['productCategory'])->find($id);
        $data = [
            'product' => $product,
            'productCategories' => ProductCategory::get(),
        ];
        return inertia('Admin/Product/Edit', $data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $product = Product::find($id);
        $request->validate([
            'product_name' => 'required',
            'product_description' => 'required',
            'link_shopee' => 'nullable',
            'link_tokopedia' => 'nullable',
            'link_lazada' => 'nullable',
            'product_thumbnail' => 'nullable',
            'product_variants' => 'nullable|array',
        ]);
        if ($request->product_thumbnail != null) {
            $productThumbnail = $request->product_thumbnail->store('/images/product/thumbnail', 'public');
        } else {
            $productThumbnail = $product->product_thumbnail;
        }
        $productCategory = ProductCategory::where('product_category_name', $request->product_category_id)->first();
        $product->update([
            'product_category_id' => $productCategory->id,
            'product_name' => $request->product_name,
            'product_slug' => Str::slug($request->product_name),
            'product_description' => $request->product_description,
            'link_shopee' => $request->link_shopee,
            'link_tokopedia' => $request->link_tokopedia,
            'link_lazada' => $request->link_lazada,
            'product_thumbnail' => $productThumbnail,
            'meta_title' => $request->meta_title,
            'meta_description' => $request->meta_description,
        ]);
        return to_route('admin.product.index')->with('success', 'Product update successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $product = Product::findOrFail($id);
            $product->productVariants()->delete();
            $product->delete();
            return back()->with('success', 'Product delete successfully!');
        } catch (\Exception $e) {
            return back()->with('error', 'An error occurred, please try again later');
        }
    }

    public function bestSellerSwitch($id) {
        $product = Product::findOrFail($id);
        if ($product->best_seller == true) {
            $product->update([
                'best_seller' => false
            ]);
        } else {
            $product->update([
                'best_seller' => true
            ]);
        }
        return back()->with('success', 'Product update successfully!');
    }
}
