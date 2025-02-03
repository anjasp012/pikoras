<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ProductCategory;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $productCategories = ProductCategory::all();
        $products = Product::with(['productVariants'])->withCount('productVariants')->orderBy('view_count', 'asc')->paginate(9);
        $data = [
            'productCategories' => $productCategories,
            'products' => $products,
            'title' => 'Special Offers',
            'meta_title' => 'Penawaran Spesial Custom T-Shirt & Phone Case. Diskon Terbatas! | Pikora Star Tech',
            'meta_description' => 'Jangan lewatkan kesempatan untuk memiliki custom t-shirt polos hingga oversized atau phone case unik dengan harga spesial. Diskon besar, stok terbatas!',
            'meta_keyword' => 'special offer, custom t shirt sale, discount phone case, limited offer t shirt, oversized t shirt promo, phone case with strap, digital printing deals, mobile phone accessories'
        ];
        return inertia('Product', $data);
    }

    public function newProducts() {
        $productCategories = ProductCategory::all();
        $products = Product::with(['productVariants'])->withCount('productVariants')->orderBy('id','desc')->paginate(9);
        $data = [
            'productCategories' => $productCategories,
            'products' => $products,
            'title' => 'New Products',
            'meta_title' => 'Produk Baru - Custom T-Shirt & Phone Case untuk Gaya Kekinian | Pikora Star Tech',
            'meta_description' => 'Temukan koleksi terbaru kami! Custom t-shirt polos dan oversized hingga phone case stylish dengan desain kreatif yang cocok untuk gaya sehari-hari Anda.',
            'meta_description' => 'new arrivals, custom t shirt terbaru, trendy phone case, oversized t shirt terbaru, fresh polo t shirt, phone case strap, custom printing product, digital printing fashion'
        ];
        return inertia('Product', $data);
    }

    public function bestSellers() {
        $productCategories = ProductCategory::all();
        $products = Product::with(['productVariants'])->withCount('productVariants')->orderBy('view_count', 'desc')->paginate(9);
        $data = [
            'productCategories' => $productCategories,
            'products' => $products,
            'title' => 'Best Sellers',
            'meta_title' => 'Produk Terlaris - Custom T-Shirt & Phone Case Favorit Pelanggan | Pikora Star Tech',
            'meta_description' => 'Lihat produk best-seller kami! Dari custom t-shirt oversized yang trendy hingga phone case fungsional, semua ada di sini karena pelanggan menyukainya.',
            'meta_keyword' => 'best selling products, popular custom t shirt, top phone case, oversized t shirt best seller, polo t shirt best picks, phone case trendy, customer favorite phone case, digital printing best seller'
        ];
        return inertia('Product', $data);
    }
    public function allProducts() {
        $productCategories = ProductCategory::all();
        $products = Product::with(['productVariants'])->withCount('productVariants')->inRandomOrder()->paginate(9);
        $data = [
            'productCategories' => $productCategories,
            'products' => $products,
            'title' => 'All Product'
        ];
        return inertia('Product', $data);
    }
    public function byCategory($product_category_slug) {
        $productCategory = ProductCategory::where('product_category_slug', $product_category_slug)->first();
        $productCategories = ProductCategory::all();
        $products = Product::with(['productVariants'])->withCount('productVariants')->where('product_category_id', $productCategory->id)->inRandomOrder()->paginate(9);
        $data = [
            'productCategories' => $productCategories,
            'products' => $products,
            'title' => $productCategory->product_category_name,
            'meta_title' => $productCategory->meta_title,
            'meta_keyword' => $productCategory->meta_keyword,
            'meta_description' => $productCategory->meta_description,
        ];
        return inertia('Product', $data);
    }

    public function detail($product_slug) {
        $product = Product::with(['productCategory','productVariants'])->withCount('productVariants')->where('product_slug', $product_slug)->first();
        $product->update(['view_count'=> $product->view_count + 1]);
        $products = Product::where('product_category_id', $product->product_category_id)->take(4)->get();
        $data = [
            'products' => $products,
            'product' => $product,
            'title' => $product->product_name,
            'meta_title' => $product->meta_title,
            'meta_keyword' => $product->meta_keyword,
            'meta_description' => $product->meta_description,
        ];
        return inertia('ProductDetail', $data);
    }
}
