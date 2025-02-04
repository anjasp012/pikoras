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
                                To inspire creativity, celebrate individuality, and empower people to make meaningful contributions to themselves and the world. To empower individuals and businesses to bring their ideas to life, creating a sustainable and collaborative ecosystem where everyone thrives.
                            </p>
                        </div>
                    </div>
                    <div className="sm:grid flex flex-col-reverse sm:grid-cols-12 gap-4 sm:gap-8 items-center mb-10">
                        <div className="col-span-1 sm:col-span-6">
                            <h5 className="text-2xl sm:text-[36px] font-bold mb-1 sm:mb-2 leading-[120%]">
                                Helping You Out, is What Keeps Us Going.
                            </h5>
                            <p className="text-sm sm:text-[18px] font-[300] leading-[150%]">
                                Deliver an innovative with personalized solutions that enable creativity and leave a lasting impact, while fostering a culture of purpose and legacy-building. Also, to provide high-quality printing solutions while fostering a culture of shared growth, responsibility, and giving back to the community.
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
                                Always Improve
                                for The Best Solutions
                            </h5>
                            <p className="text-sm sm:text-[18px] font-[300] leading-[150%]">
                                We’re committed to growing alongside our customers, partners, and team members. To builds the long-lasting relationships that benefit everyone. Collaborate and support each other to overcome challenges and celebrate successes.
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
