import { Link, usePage } from "@inertiajs/react";
import {
    ChartBar,
    ChartColumn,
    HomeIcon,
    MessageCircle,
    Package,
    Rss,
    Users,
} from "lucide-react";
import React from "react";

export default function DashboardSidebar() {
    const { hasNewMessage } = usePage().props;

    return (
        <div className="lg:block hidden border-r border-primary/20 h-full">
            <div className="flex h-full-max-h-screen flex-col gap-2">
                <div className="flex h-[55px] items-center justify-between border-b border-primary/20 px-3 w-full">
                    <div className="flex items-center gap-2 font-semibold ml-1">
                        Pikoras Dasboard
                    </div>
                </div>
                <div className="flex-1 overflow-auto py-2">
                    <nav className="grid items-start px-3 text-sm font-medium gap-1">
                        <Link
                            href={route("admin.dashboard")}
                            className={`flex items-center gap-2 rounded-md px-2 py-2.5 transition-all ${route().current("admin.dashboard") == true ? "bg-primary font-semibold text-gray-100 hover:bg-primary/90" : "text-gray-900 hover:text-gray-900 hover:bg-primary/10"}`}
                        >
                            <HomeIcon className="h-4 w-4" />
                            Dashboard
                        </Link>
                        <Link
                            href={route("admin.product-category.index")}
                            className={`flex items-center gap-2 rounded-md px-2 py-2.5 transition-all ${route().current("admin.product-category.*") == true ? "bg-primary font-semibold text-gray-100 hover:bg-primary/90" : "text-gray-900 hover:text-gray-900 hover:bg-primary/10"}`}
                        >
                            <ChartBar className="h-4 w-4" />
                            Product Category
                        </Link>
                        <Link
                            href={route("admin.product.index")}
                            className={`flex items-center gap-2 rounded-md px-2 py-2.5 transition-all ${route().current("admin.product.*") == true ? "bg-primary font-semibold text-gray-100 hover:bg-primary/90" : "text-gray-900 hover:text-gray-900 hover:bg-primary/10"}`}
                        >
                            <Package className="h-4 w-4" />
                            Product
                        </Link>
                        <Link
                            href={route("admin.post-category.index")}
                            className={`flex items-center gap-2 rounded-md px-2 py-2.5 transition-all ${route().current("admin.post-category.*") == true ? "bg-primary font-semibold text-gray-100 hover:bg-primary/90" : "text-gray-900 hover:text-gray-900 hover:bg-primary/10"}`}
                        >
                            <ChartColumn className="h-4 w-4" />
                            Post Category
                        </Link>
                        <Link
                            href={route("admin.post.index")}
                            className={`flex items-center gap-2 rounded-md px-2 py-2.5 transition-all ${route().current("admin.post.*") == true ? "bg-primary font-semibold text-gray-100 hover:bg-primary/90" : "text-gray-900 hover:text-gray-900 hover:bg-primary/10"}`}
                        >
                            <Rss className="h-4 w-4" />
                            Post
                        </Link>
                        <Link
                            href={route("admin.mail-message.index")}
                            className={`flex items-center justify-between rounded-md px-2 py-2.5 transition-all ${route().current("admin.mail-message.*") == true ? "bg-primary font-semibold text-gray-100 hover:bg-primary/90" : "text-gray-900 hover:text-gray-900 hover:bg-primary/10"}`}
                        >
                            <div className="flex items-center gap-2">
                                <MessageCircle className="h-4 w-4" />
                                Messages
                            </div>
                            {hasNewMessage && (
                                <span className="block h-2 w-2 bg-red-500 rounded-full me-3 animate-ping opacity-75"></span>
                            )}
                        </Link>
                        <Link
                            href={route("admin.visitor.index")}
                            className={`flex items-center justify-between rounded-md px-2 py-2.5 transition-all ${route().current("admin.visitor.*") == true ? "bg-primary font-semibold text-gray-100 hover:bg-primary/90" : "text-gray-900 hover:text-gray-900 hover:bg-primary/10"}`}
                        >
                            <div className="flex items-center gap-2">
                                <Users className="h-4 w-4" />
                                Visitor
                            </div>
                            {hasNewMessage && (
                                <span className="block h-2 w-2 bg-red-500 rounded-full me-3 animate-ping opacity-75"></span>
                            )}
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    );
}
