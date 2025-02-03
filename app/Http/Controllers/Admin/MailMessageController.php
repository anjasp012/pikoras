<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\MailMessageCollection;
use App\Models\MailMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class MailMessageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = MailMessage::query();
        if ($request->q) {
            $query->where('name', 'like', '%' . $request->q. '%')
                ->orWhere('topic', 'like', '%' . $request->q. '%')
                ->orWhere('email', 'like', '%' . $request->q. '%')
                ->orWhere('created_at', 'like', '%' . $request->q. '%');
        }

        if (isset($request->field) && isset($request->direction)) {
            $query->orderBy($request->field, $request->direction);
        } else {
            $query->orderBy('is_read', 'asc');
        }

        $messages = new MailMessageCollection($query->paginate($request->load));
        $data = [
            'messages' => $messages
        ];
        return inertia('Admin/MailMessage/Index', $data);
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
        Cache::forget('has_new_message');
        $message = MailMessage::find($id);
        $message->update([
            'is_read' => true
        ]);
        $data = [
            'message' => $message
        ];
        return inertia('Admin/MailMessage/Show', $data);
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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
