import Container from "@/Components/Container";
import App from "@/Layouts/App";
import { Head, Link, router } from "@inertiajs/react";
import React, { useState } from "react";
import Footer from "@/Layouts/Footer";
import BlogCard from "@/Components/BlogCard";
import { IconlySearch } from "@/Icons/IconlySearch";
import NavbarBlog from "@/Layouts/NavbarBlog";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";

export default function Blog({ postCategories, posts, postRecommendations, q }) {
    const [search, setSearch] = useState(q);

    function submit(e) {
        e.preventDefault();
        router.get(route('blog.index', {
            search: search
        }));
    }


    return (
        <>
            <Head title={'All Post'}></Head>
            <NavbarBlog postCategories={postCategories} />
            <section className="mt-6 pb-14  min-h-[75vh] grid place-content-center">
                {posts.data.length > 0 ?
                    <Container>
                        <div className="grid grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-10 mb-14">
                            {posts.data.length > 0 && (
                                <div key={0} className="col-span-1 lg:col-span-6 lg:order-1">
                                    <BlogCard post={posts.data[0]} imgheigh={"h-[100px] md:h-[150px] lg:h-[405px]"} />
                                </div>
                            )}
                            <div className='col-span-1 lg:col-span-6 lg:order-2'>
                                <div className="mb-4">
                                    <h6 className="lg:text-[24px] font-bold mb-2">Search Blog</h6>
                                    <form onSubmit={submit} className="flex gap-2 md:gap-4">
                                        <Input className='bg-[#D9D9D9]/40 w-full border-none' type="text" placeholder='Search'
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)} />
                                        <Button variant="destructive"><IconlySearch size={24} color='#ffffff' /></Button>
                                    </form>
                                </div>
                                <div className="mb-0">
                                    <h6 className="lg:text-[24px] font-bold mb-2">Recommended for You</h6>
                                    <div className="flex flex-col gap-3">
                                        {postRecommendations.data.map((article, index) => (
                                            <Link href="dd" className="group border border-black rounded w-full py-2 px-3 hover:translate-x-px hover:-translate-y-px transition-all">
                                                <h5 className='font-bold line-clamp-1 group-hover:text-primary'>{article.post_name}</h5>
                                                <div className="flex justify-between items-end">
                                                    <span className='text-light'>By <span className='text-[#263D66]'>Pikora Team</span></span>
                                                    <small className='text-[14px] text-light'>{article.created_at}</small>
                                                </div>
                                            </Link>
                                        ))}
                                        {/* <Link href="dd" className="border border-black rounded w-full py-2 px-3">
                                            <div className="flex justify-between items-end">
                                                <div className='flex flex-col'>
                                                    <h5 className='font-bold'>8 Best Quality T-Shirts for Printing</h5>
                                                    <span className='text-light'>By <span className='text-[#263D66]'>Pikora Team</span></span>
                                                </div>
                                                <small className='text-[14px] text-light'>23 Januari 2025</small>
                                            </div>
                                        </Link>
                                        <Link href="dd" className="border border-black rounded w-full py-2 px-3">
                                            <div className="flex justify-between items-end">
                                                <div className='flex flex-col'>
                                                    <h5 className='font-bold'>8 Best Quality T-Shirts for Printing</h5>
                                                    <span className='text-light'>By <span className='text-[#263D66]'>Pikora Team</span></span>
                                                </div>
                                                <small className='text-[14px] text-light'>23 Januari 2025</small>
                                            </div>
                                        </Link>
                                        <Link href="dd" className="border border-black rounded w-full py-2 px-3">
                                            <div className="flex justify-between items-end">
                                                <div className='flex flex-col'>
                                                    <h5 className='font-bold'>8 Best Quality T-Shirts for Printing</h5>
                                                    <span className='text-light'>By <span className='text-[#263D66]'>Pikora Team</span></span>
                                                </div>
                                                <small className='text-[14px] text-light'>23 Januari 2025</small>
                                            </div>
                                        </Link>
                                        <Link href="dd" className="border border-black rounded w-full py-2 px-3">
                                            <div className="flex justify-between items-end">
                                                <div className='flex flex-col'>
                                                    <h5 className='font-bold'>8 Best Quality T-Shirts for Printing</h5>
                                                    <span className='text-light'>By <span className='text-[#263D66]'>Pikora Team</span></span>
                                                </div>
                                                <small className='text-[14px] text-light'>23 Januari 2025</small>
                                            </div>
                                        </Link>
                                        <Link href="dd" className="border border-black rounded w-full py-2 px-3">
                                            <div className="flex justify-between items-end">
                                                <div className='flex flex-col'>
                                                    <h5 className='font-bold'>8 Best Quality T-Shirts for Printing</h5>
                                                    <span className='text-light'>By <span className='text-[#263D66]'>Pikora Team</span></span>
                                                </div>
                                                <small className='text-[14px] text-light'>23 Januari 2025</small>
                                            </div>
                                        </Link>
                                        <Link href="dd" className="border border-black rounded w-full py-2 px-3">
                                            <div className="flex justify-between items-end">
                                                <div className='flex flex-col'>
                                                    <h5 className='font-bold'>8 Best Quality T-Shirts for Printing</h5>
                                                    <span className='text-light'>By <span className='text-[#263D66]'>Pikora Team</span></span>
                                                </div>
                                                <small className='text-[14px] text-light'>23 Januari 2025</small>
                                            </div>
                                        </Link> */}
                                    </div>
                                </div>
                            </div>
                            {posts.data.slice(1).map((post, index) => (
                                <div key={index + 1} className="col-span-1 lg:col-span-6 lg:order-3">
                                    <BlogCard post={post} imgheigh={"h-[100px] md:h-[150px] lg:h-[405px]"} />
                                </div>
                            ))}
                        </div>
                        {posts.meta.total > 9 &&

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
                                                href={link.url || ""}
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
                    </Container>
                    :
                    <div className="text-primary/80">Article Not Found</div>
                }
            </section>
            <Footer />
        </>
    );
}

Blog.layout = (page) => <App children={page} />;
