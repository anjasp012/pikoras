import React from "react";
import NavLink from "@/Components/NavLink";
import DropdownMenu from "@/Components/DropdownMenu";
import ResponsiveNavigation from "@/Layouts/ResponsiveNavigation";
import { Link } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Container from "@/Components/Container";
import { buttonVariants } from "@/Components/ui/button";

export default function Navigation() {
    return (
        <>
            <ResponsiveNavigation />
            <nav className="hidden bg-[#f1ecf5] py-6 shadow lg:block">
                <Container>
                    <div className="flex items-center justify-between">
                        <Link href="/">
                            <ApplicationLogo className="h-[40px] w-[150px] fill-current text-gray-500" />
                        </Link>

                        <div className="flex flex-1 items-center justify-end">
                            <div className="flex items-center space-x-3">
                                <Link
                                    className={
                                        route().current("home") == true
                                            ? `${buttonVariants({ variant: "default", size: "sm" })} px-4 !text-[16px] !rounded-sm`
                                            : "px-4 !rounded-sm"
                                    }
                                    href={route("home")}
                                >
                                    Home
                                </Link>
                                <Link
                                    className={
                                        route().current("product.*") == true
                                            ? `${buttonVariants({ variant: "default", size: "sm" })} px-4 !text-[16px] !rounded-sm`
                                            : "px-4 !rounded-sm"
                                    }
                                    href={route("product.index")}
                                >
                                    Product
                                </Link>
                                <Link
                                    className={
                                        route().current("about") == true
                                            ? `${buttonVariants({ variant: "default", size: "sm" })} px-4 !text-[16px] !rounded-sm`
                                            : "px-4 !rounded-sm"
                                    }
                                    href={route("about")}
                                >
                                    About Us
                                </Link>
                                <Link
                                    className={
                                        route().current("blog.*") == true
                                            ? `${buttonVariants({ variant: "default", size: "sm" })} px-4 !text-[16px] !rounded-sm`
                                            : "px-4 !rounded-sm"
                                    }
                                    href={route("blog.index")}
                                >
                                    Blog
                                </Link>
                                <Link
                                    className={
                                        route().current("support.*") == true
                                            ? `${buttonVariants({ variant: "default", size: "sm" })} px-4 !text-[16px] !rounded-sm`
                                            : "px-4 !rounded-sm"
                                    }
                                    href={route("support.personalUse")}
                                >
                                    Support
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </nav>
        </>
    );
}
