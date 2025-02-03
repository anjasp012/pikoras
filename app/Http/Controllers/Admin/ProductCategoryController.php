<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\ProductCategory;
use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\ProductCategoryCollection;

class ProductCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = ProductCategory::query();
        if ($request->q) {
            $query->where('product_category_name', 'like', '%' . $request->q. '%');
        }
        // $query->orderBy('product_name', 'asc');

        if (isset($request->field) && isset($request->direction)) {
            $query->orderBy($request->field, $request->direction);
        }

        $productCategories = new ProductCategoryCollection($query->paginate($request->load));

        $data = [
            'productCategories' => $productCategories,
        ];
        return inertia('Admin/ProductCategory/Index', $data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Admin/ProductCategory/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $inputValues = $request->validate([
            'product_category_name'=> 'required',
            'meta_title'=> 'nullable',
            'meta_keyword'=> 'nullable',
            'meta_description'=> 'nullable',
        ]);
        $inputValues['product_category_slug'] = Str::slug($inputValues['product_category_name']);
        ProductCategory::create($inputValues);
        return to_route('admin.product-category.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $productCategory = ProductCategory::find($id);
        $data = [
            'productCategory' => $productCategory
        ];
        return inertia('Admin/ProductCategory/Show', $data);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $productCategory = ProductCategory::find($id);
        $data = [
            'productCategory' => $productCategory
        ];
        return inertia('Admin/ProductCategory/Edit', $data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $productCategory = ProductCategory::find($id);
        $inputValues = $request->validate([
            'product_category_name'=> 'required',
            'meta_title'=> 'nullable',
            'meta_keyword'=> 'nullable',
            'meta_description'=> 'nullable',
        ]);
        $inputValues['product_category_slug'] = Str::slug($inputValues['product_category_name']);
        $productCategory->update($inputValues);
        return to_route('admin.product-category.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $productCategory = ProductCategory::find($id);
        $productCategory->delete();
        return back();
    }
}
