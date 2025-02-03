import Container from "@/Components/Container";
import { Link } from "@inertiajs/react";
import React from "react";

export default function NavbarBlog({ postCategories }) {
    return (
        <nav className="py-4 border-b border-[#D9D9D9]">
            <Container className={"px-0"}>
                <div className="px-4 flex gap-4 sm:gap-8 overflow-x-scroll no-scrollbar">
                    <Link
                        href={route("blog.index")}
                        className={`inline-flex whitespace-nowrap text-sm lg:text-[20px] font-semibold pb-px ${route().current("blog.index") == true ? "border-b-2 border-black" : ""}`}
                    >
                        All Post
                    </Link>
                    {postCategories.map((category, index) => (
                        <Link
                            href={route(
                                "blog.category",
                                category.post_category_slug,
                            )}
                            className={`inline-flex whitespace-nowrap text-sm lg:text-[20px] font-semibold pb-px ${route().current("blog.category", category.post_category_slug) == true ? "border-b-2 border-black" : "border-b-2 border-transparent"}`}
                            key={index}
                        >
                            {category.post_category_name}
                        </Link>
                    ))}
                </div>
            </Container>
        </nav>
    );
}
