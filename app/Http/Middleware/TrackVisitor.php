<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\Visitor;
use Jenssegers\Agent\Agent;

class TrackVisitor
{
    public function handle(Request $request, Closure $next)
    {
        $ip = $request->ip();
        $userAgent = $request->header('User-Agent');
        $url = $request->fullUrl();
        $referrer = $request->header('referer');

        // Gunakan User-Agent Parser
        $agent = new Agent();
        $deviceType = $agent->isMobile() ? 'Mobile' : 'Desktop';
        $device = $agent->device(); // Contoh: iPhone, Windows, Mac
        $browser = $agent->browser(); // Contoh: Chrome, Firefox

        // Abaikan jika URL mengandung "/admin"
        if (str_contains($request->path(), 'admin')) {
            return $next($request);
        }

        // Simpan ke database hanya jika belum ada kunjungan dari IP ini hari ini
        if (!Visitor::where('ip_address', $ip)->where('url', $url)->where('referrer', $referrer)->whereDate('created_at', now('Asia/Jakarta'))->exists()) {
            Visitor::create([
                'ip_address' => $ip,
                'user_agent' => $userAgent,
                'url' => $url,
                'referrer' => $referrer,
                'device_type' => $deviceType,
                'device' => $device,
                'browser' => $browser,
                'created_at' => now('Asia/Jakarta')
            ]);
        }

        return $next($request);
    }
}
