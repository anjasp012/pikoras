import BlogCard from "@/Components/BlogCard";
import Container from "@/Components/Container";
import { buttonVariants } from "@/Components/ui/button";
import App from "@/Layouts/App";
import Footer from "@/Layouts/Footer";
import { Head, Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";
import React from "react";

export default function personalUse({ posts }) {
    return (
        <>
            <Head title="Custom T-Shirt & Phone Case untuk Personal Use. Ekspresikan Diri Anda | Pikora Star Tech">
                <meta
                    name="title"
                    content="Custom T-Shirt & Phone Case untuk Personal Use. Ekspresikan Diri Anda | Pikora Star Tech"
                />
                <meta
                    name="description"
                    content="Ciptakan gaya Anda sendiri dengan custom t-shirt oversized dan phone case yang dirancang khusus untuk kebutuhan personal."
                />
                <meta
                    name="keyword"
                    content="personal custom t-shirt, custom phone case, custom digital printing, oversized t-shirt, polo t-shirt personal, unique mobile phone case, personalized fashion, custom accessories"
                />
            </Head>
            <section className="mt-8 sm:mt-10">
                <Container>
                    <div className="flex gap-2 sm:gap-6 overflow-x-scroll no-scrollbar">
                        <Link
                            href={route("support.personalUse")}
                            className={`${buttonVariants({ variant: "destructive", size: "lg" })} !font-bold !sm:text-[20px]`}
                        >
                            Personal Use
                        </Link>
                        <Link
                            href={route("support.communityBussiness")}
                            className={`${buttonVariants({ variant: "secondary", size: "lg" })} !font-bold !sm:text-[20px]`}
                        >
                            Community/Bussiness
                        </Link>
                        <Link
                            href={route("support.enterpriseSupport")}
                            className={`${buttonVariants({ variant: "secondary", size: "lg" })} !font-bold !sm:text-[20px]`}
                        >
                            Enterprise Support
                        </Link>
                    </div>
                </Container>
            </section>
            <section className="mt-4 sm:mt-10">
                <Container>
                    <div className="flex flex-col-reverse lg:grid lg:grid-cols-11 gap-4 lg:gap-14">
                        <div className="sm:col-span-5">
                            <h1 className="text-3xl md:text-[40px] lg:text-[70px] font-bold leading-[120%] text-[#191F2C] tracking-[-2%] mb-2 lg:mb-0">
                                Express Yourself With Pikora!
                            </h1>
                            <p className="text-light text-sm md:text-[15px] sm:text-normal">
                                Balancing expenses, profit, and customer
                                satisfaction can be tricky for an ecommerce
                                newcomer. There are a lot of aspects that you
                                must figure out to build a profitable online
                                business, and pricing products correctly is one
                                of the most significant decisions you'll make.
                                That's why, with this article, we aim to answer
                                the question that every print-on-demand business
                                owner encounters: what is a good profit margin
                                for the print-on-demand market?
                            </p>
                        </div>
                        <div className="sm:col-span-6">
                            <div className="grid grid-cols-12 gap-2">
                                <img
                                    className="col-span-4"
                                    src="/assets/img/personal-head-1.png"
                                    alt="personal-head-1"
                                />
                                <img
                                    className="col-span-4"
                                    src="/assets/img/personal-head-2.png"
                                    alt="personal-head-1"
                                />
                                <img
                                    className="col-span-4"
                                    src="/assets/img/personal-head-3.png"
                                    alt="personal-head-1"
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className="mt-10 lg:mt-4">
                <Container>
                    <h3 className="text-2xl md:text-[32px] lg:text-[70px] text-center font-bold text-[#191F2C] mb-10 leading-[120%]">
                        You Can Visit Our Official Stores
                    </h3>
                    <div className="w-[80%] lg:w-[70%] mx-auto mb-8 md:mb-14">
                        <div className="grid grid-cols-3 sm:grid-cols-12 items-center gap-4 sm:gap-12">
                            <div className="col-span-1 sm:col-span-4">
                                <img
                                    src="/assets/img/support-shopee.png"
                                    alt="support-shopee"
                                />
                            </div>
                            <div className="col-span-1 sm:col-span-4">
                                <img
                                    src="/assets/img/support-tokopedia.png"
                                    alt="support-shopee"
                                />
                            </div>
                            <div className="col-span-1 sm:col-span-4">
                                <img
                                    src="/assets/img/support-lazada.png"
                                    alt="support-shopee"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-full sm:w-[96%] mx-auto">
                        <img
                            src="/assets/img/features.png"
                            alt="features"
                            className="w-100 rounded-lg"
                        />
                    </div>
                </Container>
            </section>
            <section className="bg-[#032c47] py-8 sm:py-14 mt-8 mb-8 text-center">
                <Container>
                    <h3 className="text-center text-white font-bold text-lg sm:text-3xl mb-6">
                        See for yourself-sign up for free
                    </h3>
                    <Link
                        className={`${buttonVariants({ variant: "destructive" })} bg-[#e40f0a] hover:bg-[#e40f0a]/90 !font-bold !rounded`}
                    >
                        Get Started
                        <ChevronRight />
                    </Link>
                </Container>
            </section>
            <section className="mb-16">
                <Container>
                    <h3 className="text-center font-bold text-lg sm:text-3xl mb-2">
                        Discover more about Us!
                    </h3>
                    <p className="text-center">Get support every step of the way with in-depth resources and tutorials</p>
                    <div className="grid grid-cols-4 gap-6 mt-8">
                        {posts.data.map((post, index) => (
                            <>
                                <div
                                    key={index}
                                    className="col-span-1"
                                >
                                    <BlogCard
                                        post={post}
                                        imgheigh={"h-[100px] lg:h-[160px]"}
                                    />
                                </div>
                            </>
                        ))}
                    </div>
                </Container>
            </section>
            <Footer />
        </>
    );
}

personalUse.layout = (page) => <App children={page} />;
