import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { Dialog, DialogClose } from "@/Components/ui/dialog";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import {
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/Components/ui/sheet";
import { Link, usePage } from "@inertiajs/react";
import {
    ChartBar,
    ChartColumn,
    HomeIcon,
    MenuIcon,
    MessageCircle,
    Package,
    Rss,
    Users,
} from "lucide-react";
import React from "react";

export default function DashboardNavbar({ children }) {
    const { hasNewMessage } = usePage().props;
    return (
        <div className="flex flex-col">
            <header className="flex h-14 lg:h-[55px] items-center gap-4 border-b border-primary/20 px-6 w-full">
                <Dialog>
                    <SheetTrigger className="min-[1024px]:hidden p-2 transition">
                        <MenuIcon />
                        <Link href="/">
                            <span className="sr-only">Home</span>
                        </Link>
                    </SheetTrigger>
                    <SheetContent side="left" className="bg-white px-2">
                        <SheetHeader>
                            <Link href="/">
                                <SheetTitle>Pikoras Dashboard</SheetTitle>
                            </Link>
                        </SheetHeader>
                        <div className="flex flex-col space-y-1 mt-[1rem]">
                            <DialogClose asChild>
                                <Link
                                    href={route("admin.dashboard")}
                                    className={`flex items-center gap-2 rounded-md px-4 py-2 transition-all ${route().current("admin.dashboard") == true ? "bg-primary font-semibold text-gray-100 hover:bg-primary/90" : "text-gray-900 hover:text-gray-900 hover:bg-primary/10"}`}
                                >
                                    <HomeIcon className="h-4 w-4" />
                                    Dashboard
                                </Link>
                            </DialogClose>
                            <DialogClose asChild>
                                <Link
                                    href={route("admin.product-category.index")}
                                    className={`flex items-center gap-2 rounded-md px-4 py-2 transition-all ${route().current("admin.product-category.*") == true ? "bg-primary font-semibold text-gray-100 hover:bg-primary/90" : "text-gray-900 hover:text-gray-900 hover:bg-primary/10"}`}
                                >
                                    <ChartBar className="h-4 w-4" />
                                    Product Category
                                </Link>
                            </DialogClose>
                            <DialogClose asChild>
                                <Link
                                    href={route("admin.product.index")}
                                    className={`flex items-center gap-2 rounded-md px-2 py-2.5 transition-all ${route().current("admin.product.*") == true ? "bg-primary font-semibold text-gray-100 hover:bg-primary/90" : "text-gray-900 hover:text-gray-900 hover:bg-primary/10"}`}
                                >
                                    <Package className="h-4 w-4" />
                                    Product
                                </Link>
                            </DialogClose>
                            <DialogClose asChild>
                                <Link
                                    href={route("admin.post-category.index")}
                                    className={`flex items-center gap-2 rounded-md px-2 py-2.5 transition-all ${route().current("admin.post-category.*") == true ? "bg-primary font-semibold text-gray-100 hover:bg-primary/90" : "text-gray-900 hover:text-gray-900 hover:bg-primary/10"}`}
                                >
                                    <ChartColumn className="h-4 w-4" />
                                    Post Category
                                </Link>
                            </DialogClose>
                            <DialogClose asChild>
                                <Link
                                    href={route("admin.post.index")}
                                    className={`flex items-center gap-2 rounded-md px-2 py-2.5 transition-all ${route().current("admin.post.*") == true ? "bg-primary font-semibold text-gray-100 hover:bg-primary/90" : "text-gray-900 hover:text-gray-900 hover:bg-primary/10"}`}
                                >
                                    <Rss className="h-4 w-4" />
                                    Post
                                </Link>
                            </DialogClose>
                            <DialogClose asChild>
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
                            </DialogClose>
                            <DialogClose asChild>
                                <Link
                                    href={route("admin.visitor.index")}
                                    className={`flex items-center justify-between rounded-md px-2 py-2.5 transition-all ${route().current("admin.visitor.*") == true ? "bg-primary font-semibold text-gray-100 hover:bg-primary/90" : "text-gray-900 hover:text-gray-900 hover:bg-primary/10"}`}
                                >
                                    <div className="flex items-center gap-2">
                                        <Users className="h-4 w-4" />
                                        Visitor
                                    </div>
                                </Link>
                            </DialogClose>
                        </div>
                    </SheetContent>
                </Dialog>
                <div className="flex justify-end w-full">
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback className="bg-secondary">
                                    CN
                                </AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-white me-4">
                            <DropdownMenuLabel>Hii, Admin</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {/* <DropdownMenuItem className="focus:bg-gray-100">
                                <Link href='setting'>Setting</Link>
                            </DropdownMenuItem> */}
                            <DropdownMenuItem className="focus:bg-gray-100">
                                <Link method="POST" className="text-start w-full" href={route('logout')}>
                                    Logout
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </header>
            {children}
        </div>
    );
}
