import { Link } from "@inertiajs/react";
import clsx from "clsx";
import React from "react";

export default function NavLink({ active = false, children, ...props }) {
    return (
        <Link
            className={clsx(
                active && "bg-[#263D66] !text-white",
                "inline-block rounded-lg px-5 py-2 text-[#191F2C]",
            )}
            {...props}
        >
            {children}
        </Link>
    );
}
