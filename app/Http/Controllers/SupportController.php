<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostCollection;
use App\Models\MailMessage;
use App\Models\Post;
use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class SupportController extends Controller
{
    public function personalUse() {
        $setting = Setting::first();
        $posts = new PostCollection(Post::inRandomOrder()->take(4)->get());
        $data = [
            'posts' => $posts,
            'setting' => $setting,
        ];
        return inertia('personalUse', $data);
    }

    public function communityBussiness() {
        return inertia('CommunityBussiness');
    }

    public function enterpriseSupport() {
        return inertia('EnterpriseSupport');
    }

    public function enterpriseSupportStoreMessage(Request $request) {
        $inputValues = $request->validate([
            'topic' => 'required',
            'name' => 'required',
            'email' => 'required|email',
            'description' => 'required'
        ]);
        MailMessage::create($inputValues);
        Cache::forget('has_new_message');
        return back()->with('success', 'Pesan anda Terkirim!');
    }
}
