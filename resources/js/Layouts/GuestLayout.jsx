import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center bg-[#f4f4f5] p-6 md:p-10">
            <div className="w-full max-w-sm md:max-w-3xl">{children}</div>
        </div>
    );
}
