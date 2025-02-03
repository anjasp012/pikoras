import React, { useEffect } from "react";
import DashboardSidebar from "./DashboardSidebar";
import DashboardNavbar from "./DashboardNavbar";
import toast, { Toaster } from "react-hot-toast";
import { Head, usePage } from "@inertiajs/react";

export default function DashboardLayout({ children }) {
    const { flash } = usePage().props;
    useEffect(() => {
        if (flash.message?.success) {
            toast.success(flash.message?.success);
        }
        if (flash.message?.error) {
            toast.error(flash.message?.error);
        }
    });

    return (
        <>
            <Head title={'Administrator'} />
            <div className="grid w-full min-h-screen lg:grid-cols-[280px_1fr] text-primary">
                <DashboardSidebar />
                <DashboardNavbar>
                    <main className="flex flex-col gap-4 p-4 lg:gap-6">
                        <Toaster />
                        {children}
                    </main>
                </DashboardNavbar>
            </div>
        </>
    );
}
