import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/Components/ui/sheet";
import { IconlyArrowDown2 } from "@/Icons/IconlyArrowDown2";
import { Link } from "@inertiajs/react";
import { ChevronDown, Menu } from "lucide-react";
import React from "react";

export default function SheetProduct({ productCategories }) {
    return (
        <>
            <Sheet>
                <SheetTrigger className="lg:hidden border p-1 rounded hover:bg-primary hover:text-white transition-auto">
                    <Menu className="w-6 h-6 sm:w-8 sm:h-8" />
                </SheetTrigger>
                <SheetContent side="left" className="bg-white pt-20">
                    <div className="flex flex-col gap-y-4 mb-8">
                        <Link
                            href={route("product.index")}
                            className={
                                route().current("product.index") == true
                                    ? "border-l border-l-4 border-[#B9A0CC] pl-2 font-bold"
                                    : "font-bold"
                            }
                        >
                            Special Offers
                        </Link>
                        <Link
                            href={route("product.newProducts")}
                            className={
                                route().current("product.newProducts") == true
                                    ? "border-l border-l-4 border-[#B9A0CC] pl-2 font-bold"
                                    : "font-bold"
                            }
                        >
                            New Products
                        </Link>
                        <Link
                            href={route("product.bestSellers")}
                            className={
                                route().current("product.bestSellers") == true
                                    ? "border-l border-l-4 border-[#B9A0CC] pl-2 font-bold"
                                    : "font-bold"
                            }
                        >
                            Best Sellers
                        </Link>
                    </div>
                    <hr className="mb-6" />
                    <div className="flex flex-col gap-y-3 mb-12">
                        <Link
                            href={route("product.allProducts")}
                            className={
                                route().current("product.allProducts") == true
                                    ? "border-l border-l-4 border-[#B9A0CC] pl-2 font-bold"
                                    : "font-bold"
                            }
                        >
                            All Products
                        </Link>
                        {productCategories.map((category, index) => (
                            <Link
                                key={index}
                                href={route(
                                    "product.category",
                                    category.product_category_slug,
                                )}
                                className="group text-[13px] flex items-center justify-between transition-all"
                            >
                                <span
                                    className={
                                        route().current(
                                            "product.category",
                                            category.product_category_slug,
                                        ) == true
                                            ? "border-b-2 border-black"
                                            : ""
                                    }
                                >
                                    {category.product_category_name}
                                </span>
                                <ChevronDown
                                    className={`${route().current("product.category", category.product_category_slug) == true ? "text-primary" : "text-primary/20"} group-hover:text-primary transition-all`}
                                    size={"20"}
                                />
                            </Link>
                        ))}
                    </div>
                </SheetContent>
            </Sheet>
        </>
    );
}
