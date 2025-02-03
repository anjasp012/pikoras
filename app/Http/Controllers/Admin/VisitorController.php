<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\VisitorCollection;
use App\Models\Visitor;
use Illuminate\Http\Request;

class VisitorController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $query = Visitor::query();
        if ($request->q) {
            $query->where('device', 'like', '%' . $request->q. '%')
                ->orWhere('browser', 'like', '%' . $request->q. '%')
                ->orWhere('url', 'like', '%' . $request->q. '%')
                ->orWhere('referrer', 'like', '%' . $request->q. '%')
                ->orWhere('created_at', 'like', '%' . $request->q. '%');
        }
        if (isset($request->field) && isset($request->direction)) {
            $query->orderBy($request->field, $request->direction);
        }

        $visitors = new VisitorCollection($query->paginate($request->load));

        $data = [
            'visitors' => $visitors
        ];
        return inertia('Admin/Visitor/Index', $data);
    }
}
