import Container from "@/Components/Container";
import { buttonVariants } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";
import App from "@/Layouts/App";
import Footer from "@/Layouts/Footer";
import { Head, Link } from "@inertiajs/react";
import { ChevronRight, PercentSquare, Send, Star } from "lucide-react";
import React from "react";

export default function personalUse() {
    return (
        <>
            <div className="bg-[#f8f8f8] pb-14">
                <Head title="Komunitas Kreatif - Inspirasi & Kolaborasi Tanpa Batas | Pikora Star Tech">
                    <meta
                        name="title"
                        content="Komunitas Kreatif - Inspirasi & Kolaborasi Tanpa Batas | Pikora Star Tech"
                    />
                    <meta
                        name="description"
                        content="Bergabunglah dengan komunitas kami untuk berbagi inspirasi desain custom t-shirt dan phone case. Tempat terbaik untuk ide kreatif Anda!"
                    />
                    <meta
                        name="keyword"
                        content="komunitas kreatif, custom t shirt ideas, phone case designs, oversized t shirt inspiration, polo t shirt komunitas, phone case with strap community, digital printing discussions, sharing creative ideas"
                    />
                </Head>
                <section className="pt-8 sm:pt-10">
                    <Container>
                        <div className="flex gap-2 sm:gap-6 overflow-x-scroll no-scrollbar">
                            <Link
                                href={route("support.personalUse")}
                                className={`${buttonVariants({ variant: "secondary", size: "lg" })} !font-bold !sm:text-[20px] `}
                            >
                                Personal Use
                            </Link>
                            <Link
                                href={route("support.communityBussiness")}
                                className={`${buttonVariants({ variant: "destructive", size: "lg" })} !font-bold !sm:text-[20px] `}
                            >
                                Community/Bussiness
                            </Link>
                            <Link
                                href={route("support.enterpriseSupport")}
                                className={`${buttonVariants({ variant: "secondary", size: "lg" })} !font-bold !sm:text-[20px] `}
                            >
                                Enterprise Support
                            </Link>
                        </div>
                    </Container>
                </section>
                <section className="mt-4 md:mt-10">
                    <Container>
                        <h1 className="text-3xl sm:text-[64px] font-bold leading-[120%] text-[#191F2C] tracking-[-2%] text-center md:mb-4">
                            Grade a Custom Item for Your Bussiness{" "}
                            <span className="font-medium">
                                Order in bigger quantity!
                            </span>
                        </h1>
                    </Container>
                    <div className="relative mt-6 lg:mt-0">
                        <div className="lg:absolute top-10 left-1/2 lg:-translate-x-1/2">
                            <div className="text-center">
                                <Link
                                    href={route('product.index')}
                                    className={`${buttonVariants({ variant: "destructive", size: "lg" })} !font-bold`}
                                >
                                    Explore Product <ChevronRight />
                                </Link>
                            </div>
                        </div>
                        <img src="/assets/img/community.png" alt="community" />
                    </div>
                </section>
                <section className="mt-10">
                    <Container>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="col-span-1 flex">
                                <Card className="bg-white border-none shadow-none rounded-3xl w-full">
                                    <CardContent className="p-8">
                                        <Star className="fill-[#60B1B2] stroke-none h-12 w-12 md:h-16 md:w-16" />
                                        <h5 className="text-[#263D66] leading-[120%] font-extrabold text-lg md:text-[24px] mb-4 mt-2">
                                            Quality selection
                                        </h5>
                                        <p className="text-[#191F2C] text-sm md:text-normal">
                                            Apparel and accessories, make custom
                                            designs from superb embroidery to
                                            vivid prints.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="col-span-1 flex">
                                <Card className="bg-white border-none shadow-none rounded-3xl w-full">
                                    <CardContent className="p-8">
                                        <PercentSquare className="fill-[#60B1B2] stroke-white h-12 w-12 md:h-16 md:w-16" />
                                        <h5 className="text-[#263D66] leading-[120%] font-extrabold text-lg md:text-[24px] mb-4 mt-2">
                                            Good discounts
                                        </h5>
                                        <p className="text-[#191F2C] text-sm md:text-normal">
                                            Bulk savings, start at 12 piece of
                                            items.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="col-span-1 flex">
                                <Card className="bg-white border-none shadow-none rounded-3xl w-full">
                                    <CardContent className="p-8">
                                        <Send className="fill-[#60B1B2] stroke-none h-12 w-12 md:h-16 md:w-16" />
                                        <h5 className="text-[#263D66] leading-[120%] font-extrabold text-lg md:text-[24px] mb-4 mt-2">
                                            Fast delivery
                                        </h5>
                                        <p className="text-[#191F2C] text-sm md:text-normal">
                                            National delivery with minimum
                                            orders.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </Container>
                </section>
            </div>
            <Footer />
        </>
    );
}

personalUse.layout = (page) => <App children={page} />;
