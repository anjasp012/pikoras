import Container from "@/Components/Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IconlyBuy } from "@/Icons/IconlyBuy";
import { IconlyScan } from "@/Icons/IconlyScan";
import { IconlySetting } from "@/Icons/IconlySetting";
import App from "@/Layouts/App";
import { Head, Link } from "@inertiajs/react";
import React from "react";
import Slider from "react-slick";
import Footer from "@/Layouts/Footer";
import { buttonVariants } from "@/Components/ui/button";
import toast from "react-hot-toast";
import { ChevronRight, LoaderIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";

export default function Home() {
    const settingsLeft = {
        dots: false,
        infinite: true,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        rtl: false,
        pauseOnHover: false,
    };
    const settingsRight = {
        dots: false,
        infinite: true,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        rtl: true,
        pauseOnHover: false,
    };
    return (
        <>
            <Head title="Custom Phone Case & T-Shirt | Desain Unik & Berkualitas | Pikora Star Tech">
                <meta
                    name="title"
                    content="Custom Phone Case & T-Shirt | Desain Unik & Berkualitas | Pikora Star Tech"
                />
                <meta
                    name="description"
                    content="Pikora adalah platform custom design printing untuk phone case dan t-shirt sesuai keinginan Anda. Dapatkan layanan custom print-on-demand untuk mencetak desain sesuai keinginan di berbagai macam media, seperti: T-Shirt, Phone case (iPhone dan Samsung), dan banyak produk lainnya."
                />
                <meta
                    name="keyword"
                    content="pikora, custom t shirt, custom case phone, custom digital printing, oversized t shirt, polo t shirts, phone case with strap, mobile phone case, custom phone cases"
                />
            </Head>
            <header className="sm:mt-16 sm:mb-20">
                <div className="grid grid-cols-12 mt-8">
                    <div className="col-span-12 px-4 sm:col-span-10 sm:col-start-2">
                        <div className="sm:grid flex flex-col-reverse sm:grid-cols-2 md:grid-cols-12 gap-8 justify-between">
                            <div className="col-span-1 sm:col-span-6">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl sm:leading-[57.6px] mb-2 sm:mb-4">
                                    <span className="font-bold italic">
                                        Custom Printing Solutions{" "}
                                    </span>
                                    <span className="font-light">
                                        for Everyone.
                                    </span>
                                </h1>
                                <p className="text-sm sm:text-xl sm:leading-[32px] text-[#191F2C]">
                                    Transform your business with our
                                    state-of-the-art{" "}
                                    <span className="italic">
                                        printing machines
                                    </span>{" "}
                                    for phone cases and apparel.
                                </p>

                                <div className="flex gap-4 sm:gap-8 mt-4 sm:mt-8">
                                    <Link
                                        href={route("product.index")}
                                        className={`${buttonVariants({ variant: "default" })} text-sm md:text-lg lg:text-xl !font-bold text-white w-full sm:w-[235px] text-center h-12 sm:h-16`}
                                    >
                                        Browse Products
                                    </Link>
                                    <Link
                                        onClick={(e) => (
                                            e.preventDefault(),
                                            toast("Cooming Soon", {
                                                icon: "👊",
                                            })
                                        )}
                                        className={`${buttonVariants({ variant: "default" })} text-sm md:text-lg lg:text-xl !font-bold text-white w-full sm:w-[235px] text-center h-12 sm:h-16 !bg-[#26776A] hover:!bg-[#26776A]/90`}
                                    >
                                        View Demos{" "}
                                    </Link>
                                </div>

                                <div className="mt-10">
                                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold">
                                        3 Reasons Why Pikora?
                                    </h2>
                                </div>

                                <div className="mt-6 flex flex-col gap-4 sm:gap-10">
                                    <div className="grid grid-cols-12 gap-4 sm:gap-8">
                                        <div className="col-span-3">
                                            <IconlyScan color="#3d5176" />
                                        </div>
                                        <div className="col-span-9">
                                            <div className="font-semibold text-[#263D66] text-xl sm:text-2xl">
                                                Seamless
                                            </div>
                                            <div className="text-sm sm:text-base">
                                                Give you a unique experience
                                                that allows you to easily
                                                design, share instantly, and
                                                print high quality results. All
                                                in one seamless process.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-12 gap-4 sm:gap-8">
                                        <div className="col-span-3">
                                            <IconlyBuy color="#3d5176" />
                                        </div>
                                        <div className="col-span-9">
                                            <div className="font-semibold text-[#263D66] text-xl sm:text-2xl">
                                                Premium Quality
                                            </div>
                                            <div className="text-sm sm:text-base">
                                                Utilize state of the art
                                                printing technology to deliver
                                                premium prints beyond
                                                expectations. Ensuring
                                                excellence in every print you
                                                want with no limit on order
                                                quantities. Even for one pieces.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-12 gap-4 sm:gap-8">
                                        <div className="col-span-3">
                                            <IconlySetting color="#3d5176" />
                                        </div>
                                        <div className="col-span-9">
                                            <div className="font-semibold text-[#263D66] text-xl sm:text-2xl">
                                                DIY Customization
                                            </div>
                                            <div className="text-sm sm:text-base">
                                                With more experience in the
                                                market, Pikora brings more
                                                personalized custom printing
                                                solutions. With an easier
                                                process without the need for
                                                professionals, combining local
                                                insights with global expertise
                                                to offer a personalized value.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-1 sm:col-span-6 mt-0">
                                <img
                                    src="/assets/img/mockup.png"
                                    alt="mockup"
                                    className="w-8/12 mx-auto mb-8"
                                />
                                <div className="grid grid-cols-12 justify-center">
                                    <div className="col-span-10 sm:col-span-8 col-start-2 sm:col-start-3">
                                        <div className="flex gap-4">
                                            <Link
                                                onClick={(e) => (
                                                    e.preventDefault(),
                                                    toast("Cooming Soon", {
                                                        icon: "👊",
                                                    })
                                                )}
                                                className={`${buttonVariants({ variant: "secondary" })} w-full h-10 sm:h-16 bg-[#d9d9d9]/20 hover:bg-[#d9d9d9]/10 shadow rounded-2xl sm:!text-[20px] font-semibold`}
                                            >
                                                <img
                                                    className="w-[16px] sm:w-auto"
                                                    src="/assets/img/apple.png"
                                                    alt="apple_button"
                                                />
                                                App Store
                                            </Link>
                                            <Link
                                                onClick={(e) => (
                                                    e.preventDefault(),
                                                    toast("Cooming Soon", {
                                                        icon: "👊",
                                                    })
                                                )}
                                                className={`${buttonVariants({ variant: "secondary" })} w-full h-10 sm:h-16 bg-[#d9d9d9]/20 hover:bg-[#d9d9d9]/10 shadow rounded-2xl sm:!text-[20px] font-semibold`}
                                            >
                                                <img
                                                    className="w-[16px] sm:w-auto"
                                                    src="/assets/img/gps.png"
                                                    alt="gps"
                                                />
                                                Play Store
                                            </Link>
                                        </div>
                                    </div>
                                    {/* <a href="" className="flex items-center gap-3 py-4 px-8 bg-[#d9d9d9]/20 rounded-3xl shadow text-[#191F2C] font-semibold text-[20px]">
                                        App Store
                                    </a> */}
                                    {/* <a href="" className="flex items-center gap-3 py-4 px-8 bg-[#d9d9d9]/20 rounded-3xl shadow text-[#191F2C] font-semibold text-[20px]">
                                        <img src="/assets/img/gps.png" alt="gps_button" />
                                        Play Store
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="overflow-hidden sm:mb-16">
                <div className="grid grid-cols-12 mt-8">
                    <div className="col-span-12 px-4 sm:col-span-10 sm:col-start-2">
                        <h3 className="font-[900] text-2xl sm:text-[42px] text-[#191F2C] mb-1 sm:mb-2">
                            You have ideas, Pikora makes them a reality!
                        </h3>
                        <p className="text-sm sm:text-[20px] text-[#191F2C]">
                            Have a creative idea for a design? Pikora is here to
                            bring it to life with our advanced UV printing
                            technology!
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-12 mt-4 sm:mt-8">
                    <div className="col-span-12 sm:col-span-11 sm:px-0">
                        <div className="flex flex-col-reverse sm:grid sm:grid-cols-12 gap-4 sm:gap-8">
                            <div className="sm:col-span-9">
                                <div className="slider-container">
                                    <Slider {...settingsLeft}>
                                        <div className="px-1 sm:px-3">
                                            <img
                                                src="/assets/img/your_design.png"
                                                alt="your_design"
                                                className="w-full rounded sm:rounded-3xl"
                                            />
                                        </div>
                                        <div className="px-1 sm:px-3">
                                            <img
                                                src="/assets/img/your_design.png"
                                                alt="your_design"
                                                className="w-full rounded sm:rounded-3xl"
                                            />
                                        </div>
                                        <div className="px-1 sm:px-3">
                                            <img
                                                src="/assets/img/your_design.png"
                                                alt="your_design"
                                                className="w-full rounded sm:rounded-3xl"
                                            />
                                        </div>
                                        <div className="px-1 sm:px-3">
                                            <img
                                                src="/assets/img/your_design.png"
                                                alt="your_design"
                                                className="w-full rounded sm:rounded-3xl"
                                            />
                                        </div>
                                        <div className="px-1 sm:px-3">
                                            <img
                                                src="/assets/img/your_design.png"
                                                alt="your_design"
                                                className="w-full rounded sm:rounded-3xl"
                                            />
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                            <div className="sm:col-span-3 px-4">
                                <h5 className="text-2xl sm:text-[32px] leading-[110%] font-bold text-[#263D66] mb-1 sm:mb-4">
                                    Personalized Your Own Phone Case!
                                </h5>
                                <p className="text-sm sm:text-[15px] text-[#191F2C]">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 mt-6 sm:mt-12">
                    <div className="col-span-12 sm:col-span-11 sm:col-start-2">
                        <div className="flex flex-col sm:grid sm:grid-cols-12 gap-4 sm:gap-8">
                            <div className="sm:col-span-3 px-4">
                                <h5 className="text-2xl sm:text-[32px] leading-[110%] font-bold text-[#263D66] mb-2 sm:mb-4">
                                    Personalized Your Own Style!
                                </h5>
                                <p className="text-sm sm:text-[15px] text-[#191F2C]">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </p>
                            </div>
                            <div className="sm:col-span-9">
                                <div className="slider-container">
                                    <Slider {...settingsRight}>
                                        <div className="px-1 sm:px-3">
                                            <img
                                                src="/assets/img/your_design_2.png"
                                                alt="your_design_2"
                                                className="w-full rounded sm:rounded-3xl"
                                            />
                                        </div>
                                        <div className="px-1 sm:px-3">
                                            <img
                                                src="/assets/img/your_design_2.png"
                                                alt="your_design_2"
                                                className="w-full rounded sm:rounded-3xl"
                                            />
                                        </div>
                                        <div className="px-1 sm:px-3">
                                            <img
                                                src="/assets/img/your_design_2.png"
                                                alt="your_design_2"
                                                className="w-full rounded sm:rounded-3xl"
                                            />
                                        </div>
                                        <div className="px-1 sm:px-3">
                                            <img
                                                src="/assets/img/your_design_2.png"
                                                alt="your_design_2"
                                                className="w-full rounded sm:rounded-3xl"
                                            />
                                        </div>
                                        <div className="px-1 sm:px-3">
                                            <img
                                                src="/assets/img/your_design_2.png"
                                                alt="your_design_2"
                                                className="w-full rounded sm:rounded-3xl"
                                            />
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pb-14">
                <Container>
                    <div className="pb-8">
                        <h3 className="text-center text-xl lg:text-[64px] font-bold leading-[120%] -tracking-[2%]">Create Custom Items for Your Business</h3>
                        <h5 className="text-center text-lg lg:text-[64px] font-medium leading-[120%] -tracking-[2%]">Order in bigger quantity!</h5>
                    </div>
                </Container>
                <div className="relative">
                    <div className="absolute top-10 left-1/2 -translate-x-1/2">
                        <div className="text-center">
                            <Link
                                href={route('product.index')}
                                className={`${buttonVariants({ variant: "destructive", size: "lg" })} !font-bold`}
                            >
                                See More <ChevronRight />
                            </Link>
                        </div>
                    </div>
                    <img src="/assets/img/community.png" alt="community" />
                </div>
                <Container>
                    <div className="w-full sm:w-[90%] mx-auto mt-6 sm:mt-14">
                        <img
                            src="/assets/img/features.png"
                            alt="features"
                            className="w-100 rounded-lg"
                        />
                    </div>
                </Container>
            </section>
            <section className="pb-20">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                        {/* Kartu kiri atas */}
                        <div className="col-span-1">
                            <div className="relative rounded-[42px] overflow-hidden h-full w-full">
                                <div className="absolute left-4 top-4 md:left-9 md:top-7">
                                    <h5 className="text-[32px] md:text-[48px] text-white font-[900] leading-[120%]">
                                        What did <br />
                                        they say?
                                    </h5>
                                </div>
                                <img
                                    src="/assets/img/customer-experience.png"
                                    className="w-full h-full object-cover"
                                    alt="customer-experience"
                                />
                            </div>
                        </div>

                        {/* Kartu kanan atas */}
                        <div className="col-span-1">
                            <div className="relative rounded-[42px] overflow-hidden bg-primary px-6 py-6 md:px-10 md:py-10 h-full w-full flex flex-col  justify-center">
                                <div>
                                    <h6 className="text-[24px] md:text-[32px] font-[900] text-white leading-[120%] tracking-[-2%] mb-5">
                                        <span className="block text-[32px] md:text-[48px]">"</span>
                                        I’ve tried other DIY printing services, but obviously they <br className="hidden md:block" /> didn't fit to me.
                                    </h6>
                                    <p className="text-white font-[300] text-[16px] md:text-[18px] leading-[120%] tracking-[-2%] mt-auto">
                                        The Pikora App is a lot more streamlined than the other print-on-demand App that we
                                        used and the quality is a lot better.
                                    </p>
                                </div>
                                <div className="flex gap-5 mt-6 items-center">
                                    <Avatar className="w-[60px] h-[60px] md:w-[81px] md:h-[81px]">
                                        <AvatarImage src="/assets/img/sarah_putri.png" />
                                        <AvatarFallback className="bg-red-100">
                                            SP
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="text-white flex flex-col gap-1">
                                        <div className="font-bold text-[18px] md:text-[20px] leading-[120%]">Sarah Putri</div>
                                        <div className="font-[300] text-[12px] md:text-[13px] leading-[120%]">Creative Entrepreneur</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Kartu kiri bawah */}
                        <div className="col-span-1">
                            <div className="relative rounded-[42px] overflow-hidden bg-primary px-6 py-6 md:px-10 md:py-10 h-full w-full flex flex-col justify-center">
                                <div>
                                    <h6 className="text-[24px] md:text-[32px] font-[900] text-white leading-[120%] tracking-[-2%] mb-5">
                                        <span className="block text-[32px] md:text-[48px]">"</span>
                                        For us, It is the best Customization Apps in Indonesia.
                                    </h6>
                                    <p className="text-white font-[300] text-[16px] md:text-[18px] leading-[120%] tracking-[-2%] mt-auto">
                                        The Pikora App is a lot more streamlined than the other print-on-demand App that we
                                        used and the quality is a lot better.
                                    </p>
                                </div>
                                <div className="flex gap-5 mt-6 items-center">
                                    <Avatar className="w-[60px] h-[60px] md:w-[81px] md:h-[81px]">
                                        <AvatarImage src="/assets/img/nico_kimberly.png" />
                                        <AvatarFallback className="bg-red-100">
                                            NK
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="text-white flex flex-col gap-1">
                                        <div className="font-bold text-[18px] md:text-[20px] leading-[120%]">Nico & Kimberly</div>
                                        <div className="font-[300] text-[12px] md:text-[13px] leading-[120%]">Influencer</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Kartu kanan bawah */}
                        <div className="col-span-1">
                            <div className="relative rounded-[42px] overflow-hidden h-full w-full">
                                <div className="absolute left-4 bottom-4 md:left-9 md:bottom-7">
                                    <h5 className="text-[32px] md:text-[48px] text-white font-[900] leading-[120%]">
                                        What did <br />
                                        they say?
                                    </h5>
                                </div>
                                <img
                                    src="/assets/img/young-coup.png"
                                    className="w-full h-full object-cover"
                                    alt="young-coup"
                                />
                            </div>
                        </div>
                    </div>

                </Container>
            </section>
            <Footer />
        </>
    );
}

Home.layout = (page) => <App children={page} />;
