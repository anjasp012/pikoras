<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $setting = Setting::first();
        $data = [
            'setting' => $setting
        ];
        return inertia('Admin/Setting', $data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $inputValues = $request->validate([
            "whatsapp_number" => 'nullable',
            "whatsapp_message" => 'nullable',
            "whatsapp_hover_message" => 'nullable',
            "link_shopee" => 'nullable',
            "link_lazada" => 'nullable',
            "link_tokopedia" => 'nullable',
        ]);
        $setting = Setting::first();
        $setting->update($inputValues);
        return to_route('admin.dashboard')->with('success', 'Setting update successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
