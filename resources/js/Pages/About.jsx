import Container from "@/Components/Container";
import App from "@/Layouts/App";
import { Head } from "@inertiajs/react";
import React from "react";
import Footer from "@/Layouts/Footer";

export default function About() {
    return (
        <>
            <Head title="Tentang Kami - Merancang Gaya Unik untuk Anda | Pikora Star Tech">
                <meta
                    name="title"
                    content="Tentang Kami - Merancang Gaya Unik untuk Anda | Pikora Star Tech"
                />
                <meta
                    name="description"
                    content="Kami hadir untuk mendukung ekspresi diri Anda! Dengan custom t-shirt oversized, polo t-shirt, dan phone case berkualitas tinggi, kami membawa gaya Anda ke tingkat berikutnya."
                />
                <meta
                    name="keyword"
                    content="pikora, custom t shirt company, creative phone case maker, digital printing team, oversized t shirt creator, polo t shirt specialist, phone case with strap, unique fashion brand"
                />
            </Head>
            <header className="bg-[url('/assets/img/about_header.png')] bg-cover h-[30vw]">
                <Container>
                    <div className="flex flex-col justify-center h-[30vw] gap-2 sm:gap-8 items-center sm:items-start">
                    <img src="/assets/img/Logo_Only_White.png" alt="Logo_Only_White.png" className="w-[5vw]" />
                    <h5 className="text-white font-bold italic md:text-[40px] leading-[120%]">Turning Your Creativity into <br />
                    Products and Valuable Things.</h5>
                    </div>
                </Container>
            </header>
            <section className="mt-8 sm:mt-12 pb-14">
                <Container>
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 items-center mb-10">
                        <div className="col-span-1 sm:col-span-6">
                            <img
                                src="/assets/img/we_are_here_for_you.png"
                                alt="we_are_here_for_you"
                                className="w-full rounded-xl sm:rounded-3xl"
                            />
                        </div>
                        <div className="col-span-1 sm:col-span-6">
                            <h5 className="text-2xl sm:text-[36px] font-bold mb-1 sm:mb-2 leading-[120%]">
                                We Are Here for You!
                            </h5>
                            <p className="text-sm sm:text-[18px] font-[300] leading-[150%]">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                    <div className="sm:grid flex flex-col-reverse sm:grid-cols-12 gap-4 sm:gap-8 items-center mb-10">
                        <div className="col-span-1 sm:col-span-6">
                            <h5 className="text-2xl sm:text-[36px] font-bold mb-1 sm:mb-2 leading-[120%]">
                                Helping You Out, is What Keeps Us Go2ing.
                            </h5>
                            <p className="text-sm sm:text-[18px] font-[300] leading-[150%]">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="col-span-1 sm:col-span-6">
                            <img
                                src="/assets/img/helping_you_out.png"
                                alt="helping_you_out"
                                className="w-full rounded-xl sm:rounded-3xl"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 items-center">
                        <div className="col-span-1 sm:col-span-6">
                            <img
                                src="/assets/img/always_changing.png"
                                alt="always_changing"
                                className="w-full rounded-xl sm:rounded-3xl"
                            />
                        </div>
                        <div className="col-span-1 sm:col-span-6">
                            <h5 className="text-2xl sm:text-[36px] font-bold mb-1 sm:mb-2 leading-[120%]">
                                Always Changing for The Better.
                            </h5>
                            <p className="text-sm sm:text-[18px] font-[300] leading-[150%]">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>
            <Footer />
        </>
    );
}

About.layout = (page) => <App children={page} />;
