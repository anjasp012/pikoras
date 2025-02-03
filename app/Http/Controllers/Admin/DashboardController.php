<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\MailMessage;
use App\Models\Post;
use App\Models\PostCategory;
use App\Models\Product;
use App\Models\ProductCategory;
use App\Models\Visitor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $productCategoryCount = ProductCategory::count();
        $productCount = Product::count();
        $postCategoryCount = PostCategory::count();
        $postCount = Post::count();
        $messageCount = MailMessage::count();
        $visitorCount = Visitor::count();
        $visitorCounts = Visitor::select(
            DB::raw('DATE(created_at) as date'),
            DB::raw('SUM(CASE WHEN device_type = "Desktop" THEN 1 ELSE 0 END) as desktop'),
            DB::raw('SUM(CASE WHEN device_type = "Mobile" THEN 1 ELSE 0 END) as mobile')
        )
        ->groupBy('date')
        ->orderBy('date', 'ASC')
        ->get();
        // $postCategoryCount = PostCategory::count();
        $data = [
            'productCategoryCount' => $productCategoryCount,
            'productCount' => $productCount,
            'postCategoryCount' => $postCategoryCount,
            'postCount' => $postCount,
            'messageCount' => $messageCount,
            'visitorCount' => $visitorCount,
            'visitorCounts' => $visitorCounts,
        ];
        return inertia('Admin/Dashboard', $data);
    }
}
