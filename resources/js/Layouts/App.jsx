import React, { useEffect } from "react";
import Navigation from "./Navigation";
import toast, { Toaster } from "react-hot-toast";
import { usePage } from "@inertiajs/react";

export default function App({ children }) {
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
        <div>
            <Navigation />
            <Toaster />
            {children}
        </div>
    );
}
