import { IconlyArrowDown2 } from "@/Icons/IconlyArrowDown2";
import { Link } from "@inertiajs/react";
import { ChevronDown } from "lucide-react";
import React from "react";

export default function SidebarProduct({ productCategories }) {
    return (
        <>
            <div className="flex flex-col gap-y-4 mb-12">
                <Link
                    href={route("product.index")}
                    className={
                        route().current("product.index") == true
                            ? "border-l border-l-4 border-[#B9A0CC] pl-2 text-[20px] font-bold"
                            : "text-[20px] font-bold"
                    }
                >
                    Special Offers
                </Link>
                <Link
                    href={route("product.newProducts")}
                    className={
                        route().current("product.newProducts") == true
                            ? "border-l border-l-4 border-[#B9A0CC] pl-2 text-[20px] font-bold"
                            : "text-[20px] font-bold"
                    }
                >
                    New Products
                </Link>
                <Link
                    href={route("product.bestSellers")}
                    className={
                        route().current("product.bestSellers") == true
                            ? "border-l border-l-4 border-[#B9A0CC] pl-2 text-[20px] font-bold"
                            : "text-[20px] font-bold"
                    }
                >
                    Best Sellers
                </Link>
            </div>
            <hr className="mb-10" />
            <div className="flex flex-col gap-y-4 mb-12">
                <Link
                    href={route("product.allProducts")}
                    className={
                        route().current("product.allProducts") == true
                            ? "border-l border-l-4 border-[#B9A0CC] pl-2 text-[20px] font-bold"
                            : "text-[20px] font-bold"
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
                        className="group text-[16px] flex items-center justify-between transition-all"
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
        </>
    );
}
