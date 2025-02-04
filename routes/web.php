<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\SettingController;
use App\Http\Controllers\Admin\VisitorController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SupportController;
use Illuminate\Support\Facades\Route;

Route::get('/', HomeController::class)->name('home');
Route::get('/product', [ProductController::class, 'index'])->name('product.index');
Route::get('/product/category/new-products', [ProductController::class, 'newProducts'])->name('product.newProducts');
Route::get('/product/category/best-sellers', [ProductController::class, 'bestSellers'])->name('product.bestSellers');
Route::get('/product/category/all-products', [ProductController::class, 'allProducts'])->name('product.allProducts');
Route::get('/product/category/{product_category_slug}', [ProductController::class, 'byCategory'])->name('product.category');
Route::get('/product/{product_slug}', [ProductController::class, 'detail'])->name('product.detail');
Route::post('/product/submitRating', [ProductController::class, 'submitRating'])->name('product.submitRating');
Route::get('/about-us', AboutController::class)->name('about');
Route::get('/blog', [BlogController::class, 'index'])->name('blog.index');
Route::get('/blog/{post_slug}', [BlogController::class, 'detail'])->name('blog.detail');
Route::post('/blog/comment', [CommentController::class, 'store'])->name('comment.store');
Route::get('/blog/category/{post_category_slug}', [BlogController::class, 'byCategory'])->name('blog.category');
Route::get('/support/personal-use', [SupportController::class, 'personalUse'])->name('support.personalUse');
Route::get('/support/community-bussiness', [SupportController::class, 'communityBussiness'])->name('support.communityBussiness');
Route::get('/support/enterprise-support', [SupportController::class, 'enterpriseSupport'])->name('support.enterpriseSupport');
Route::post('/support/enterprise-support', [SupportController::class, 'enterpriseSupportStoreMessage'])->name('support.enterpriseSupportStoreMessage');

Route::prefix('admin')->name('admin.')->middleware('auth')->group(function () {
    Route::get('/', DashboardController::class)->name('dashboard');
    Route::resource('product-category', App\Http\Controllers\Admin\ProductCategoryController::class);
    Route::resource('product', App\Http\Controllers\Admin\ProductController::class);
    Route::put('product/bestSellerSwith/{id}', [App\Http\Controllers\Admin\ProductController::class, 'bestSellerSwitch'])->name('product.bestSellerSwitch');
    Route::resource('post-category', App\Http\Controllers\Admin\PostCategoryController::class);
    Route::resource('post', App\Http\Controllers\Admin\PostController::class);
    Route::resource('mail-message', App\Http\Controllers\Admin\MailMessageController::class);
    Route::get('/visitor', VisitorController::class)->name('visitor.index');
    Route::resource('setting', App\Http\Controllers\Admin\SettingController::class);
});




// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__.'/auth.php';
