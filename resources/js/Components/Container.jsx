import { cn } from "@/lib/utils";
import React from "react";

export default function Container({ children, className }) {
    return (
        <div className="grid grid-cols-12">
            <div
                className={cn(
                    "col-span-12 px-4 sm:col-span-10 sm:col-start-2 sm:px-0",
                    className,
                )}
            >
                {children}
            </div>
        </div>
    );
}
