import React from "react";
import { Link } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Menu, MenuIcon } from "lucide-react";

export default function ResponsiveNavigation() {
    return (
        <nav className="border-b border-gray-100 shadow px-4 py-4 lg:hidden">
            <div className="flex items-center justify-between">
                <Link href="/">
                    <ApplicationLogo className="w-24 fill-current text-gray-500" />
                </Link>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <MenuIcon />
                        <div className="sr-only">Menu</div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white me-4">
                        <DropdownMenuItem className="focus:bg-gray-100">
                            <Link href={route("home")} className="w-full">
                                Home
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="focus:bg-gray-100">
                            <Link
                                className="w-full"
                                href={route("product.index")}
                            >
                                Product
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="focus:bg-gray-100">
                            <Link className="w-full" href={route("about")}>
                                About Us
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="focus:bg-gray-100">
                            <Link className="w-full" href={route("blog.index")}>
                                Blog
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="focus:bg-gray-100">
                            <Link
                                className="w-full"
                                href={route("support.personalUse")}
                            >
                                Support
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    );
}
