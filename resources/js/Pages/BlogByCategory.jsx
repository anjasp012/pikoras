import Container from "@/Components/Container";
import App from "@/Layouts/App";
import { Head, Link, router } from "@inertiajs/react";
import React, { useState } from "react";
import Footer from "@/Layouts/Footer";
import BlogCard from "@/Components/BlogCard";
import { IconlySearch } from "@/Icons/IconlySearch";
import NavbarBlog from "@/Layouts/NavbarBlog";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";

export default function Blog({
    postCategories,
    postCategory,
    posts,
    postRecommendations,
    meta_title,
    meta_description,
    meta_keyword,
    q
}) {
    const [search, setSearch] = useState(q);

    function submit(e) {
        e.preventDefault();
        router.get(route('blog.category', {
            post_category_slug: postCategory.post_category_slug,
            search: search
        }));
    }

    return (
        <>
            <Head title={postCategory.post_category_name}>
                <meta name="title" content={meta_title} />
                <meta name="description" content={meta_description} />
                <meta name="keyword" content={meta_keyword} />
            </Head>
            <NavbarBlog postCategories={postCategories} />
            <section className="mt-6">
                <Container>
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2 lg:gap-0">
                        <h3 className="font-bold md:text-[32px]">
                            {postCategory.post_category_name}
                        </h3>
                        <form onSubmit={submit} className="flex gap-2 md:gap-4">
                            <Input
                                className="bg-[#D9D9D9]/40 w-full lg:w-[500px] border-none"
                                type="text"
                                placeholder="Search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <Button variant="destructive">
                                <IconlySearch size={24} color="#ffffff" />
                            </Button>
                        </form>
                    </div>
                </Container>
            </section>
            <section className={`mt-4 pb-14 min-h-[65vh] grid place-content-center`}>
                {posts.data.length > 0 ?
                    <Container>
                        <div className="flex flex-wrap md:grid md:grid-cols-12 md:gap-10 gap-4 sm:gap-10 mb-14">
                            {/* <div className="col-span-12">
                            <BlogCard src="/assets/img/post_black.png" imgheigh='h-[431px]' />
                        </div> */}
                            {posts.data.map((post, index) => (
                                <div
                                    key={index}
                                    className={
                                        index == 0
                                            ? "w-full md:col-span-12"
                                            : "flex-1 md:col-span-4"
                                    }
                                >
                                    <BlogCard
                                        post={post}
                                        imgheigh={
                                            index == 0
                                                ? "h-[150px] sm:h-[301px] lg:h-[431px]"
                                                : "h-[100px] sm:h-[100px] lg:h-[200px]"
                                        }
                                    />
                                </div>
                            ))}
                            <div className='col-span-1 lg:col-span-4 lg:order-2'>
                                <div className="mb-0">
                                    <h6 className="text-[24px] font-bold mb-2">Recommended for You</h6>
                                    <div className="flex flex-col gap-3">
                                        {postRecommendations.data.map((article, index) => (
                                            <Link key={index} href={route("blog.detail", article.post_slug)} className="group border border-black rounded w-full py-2 px-3 hover:translate-x-px hover:-translate-y-px transition-all">
                                                <h5 className='font-bold line-clamp-1 group-hover:text-primary'>{article.post_name}</h5>
                                                <div className="flex justify-between items-end">
                                                    <span className='text-light'>By <span className='text-[#263D66]'>Pikora Team</span></span>
                                                    <small className='text-[14px] text-light'>{article.created_at}</small>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {posts.meta.total > 6 &&

                            <ul className="flex justify-center items-center gap-x-px">
                                {posts.meta.links.map((link, index) => {
                                    return (
                                        <li key={index}>
                                            <Link
                                                disabled={
                                                    link.url == null
                                                        ? true
                                                        : false
                                                }
                                                preserveState
                                                href={`${link.url || ""}${search != '' ? `&search=${search}` : ''}`}
                                                className={`${link.url == null ? "text-gray-300 cursor-normal" : "hover:bg-primary hover:border-primary hover:text-white"} ${link.active ? "bg-primary text-white border-primary" : ""} w-10 h-8 border rounded flex justify-center items-center rounded`}
                                                dangerouslySetInnerHTML={{
                                                    __html: link.label,
                                                }}
                                            />
                                        </li>
                                    );
                                })}
                            </ul>
                        }
                    </Container> :
                    <div className="text-primary/80">Article Not Found</div>
                }
            </section>
            <Footer />
        </>
    );
}

Blog.layout = (page) => <App children={page} />;
