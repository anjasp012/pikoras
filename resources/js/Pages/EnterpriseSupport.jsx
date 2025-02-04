import Container from "@/Components/Container";
import { Button, buttonVariants } from "@/Components/ui/button";
import { Checkbox } from "@/Components/ui/checkbox";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Textarea } from "@/Components/ui/textarea";
import App from "@/Layouts/App";
import Footer from "@/Layouts/Footer";
import { Head, Link, useForm } from "@inertiajs/react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function personalUse() {
    const { data, setData, post, processing, errors } = useForm({
        topic: "",
        name: "",
        email: "",
        description: "",
        terms: false,
    });

    function submit(e) {
        e.preventDefault();
        post(route("support.enterpriseSupportStoreMessage"));
        setData({
            topic: "",
            name: "",
            email: "",
            description: "",
            terms: false,
        });
    }
    return (
        <>
            <Head title="Solusi Custom untuk Bisnis Anda - T-Shirt & Phone Case | Pikora Star Tech">
                <meta
                    name="title"
                    content="Solusi Custom untuk Bisnis Anda - T-Shirt & Phone Case | Pikora Star Tech"
                />
                <meta
                    name="description"
                    content="Tingkatkan branding bisnis Anda dengan custom t-shirt dan phone case eksklusif. Cocok untuk acara, promosi, atau seragam perusahaan Anda."
                />
                <meta
                    name="keyword"
                    content="custom enterprise solutions, corporate t shirt, branded phone case, oversized t shirt perusahaan, polo t shirt bisnis, digital printing corporate, phone case promo, business branding solutions"
                />
            </Head>
            <section className="mt-8 sm:mt-10">
                <Container>
                    <div className="flex gap-2 sm:gap-6 overflow-x-scroll no-scrollbar">
                        <Link
                            href={route("support.personalUse")}
                            className={`${buttonVariants({ variant: "secondary", size: "lg" })} !font-bold !sm:text-[20px]`}
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
                            className={`${buttonVariants({ variant: "destructive", size: "lg" })} !font-bold !sm:text-[20px]`}
                        >
                            Enterprise Support
                        </Link>
                    </div>
                </Container>
            </section>
            <section className="mt-4 md:mt-10 pb-14">
                <Container>
                    <h3 className="text-center font-bold text-2xl md:text-4xl sm:mb-2">
                        Contact Form
                    </h3>
                    <p className="text-center text-[#5d5641] font-medium text-sm md:text-2xl">
                        Send us a message using the form below!
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-12 justify-center mt-10 md:gap-8">
                        <div className="col-span-2 md:col-span-8 lg:col-start-3">
                            <form onSubmit={submit}>
                                <div className="grid gap-6">
                                    <div className="grid gap-2">
                                        <Label className="font-bold">
                                            Topic
                                        </Label>
                                        <Input
                                            value={data.topic}
                                            required
                                            className="bg-white border-gray-300"
                                            onChange={(e) =>
                                                setData("topic", e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label className="font-bold">
                                            Full name
                                        </Label>
                                        <Input
                                            value={data.name}
                                            required
                                            className="bg-white border-gray-300"
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label className="font-bold">
                                            Your email
                                        </Label>
                                        <Input
                                            value={data.email}
                                            required
                                            type="email"
                                            className="bg-white border-gray-300"
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label className="font-bold">
                                            Your description
                                        </Label>
                                        <Textarea
                                            value={data.description}
                                            required
                                            className="bg-white border-gray-300 h-[220px]"
                                            onChange={(e) =>
                                                setData(
                                                    "description",
                                                    e.target.value,
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="flex md:items-top space-x-2">
                                        <Checkbox
                                            required
                                            checked={data.terms}
                                            className="border-gray-300"
                                            id="terms"
                                            onClick={(e) =>
                                                setData("terms", !data.terms)
                                            }
                                        />
                                        <label
                                            htmlFor="terms"
                                            className="font-light leading-[150%] peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[14px] md:text-normal tracking-widest"
                                        >
                                            I agree to my data being processed
                                            in accordance with Pikora’s Privacy
                                            Policy. Pikora Star Tech, Sedayu
                                            City, Kelapa Gading, Jl. Boulevard
                                            Selatan Blok SBCSA No. 63, Rawa
                                            Terate, Cakung, Jakarta Timur,
                                            139202025
                                        </label>
                                    </div>
                                    <div className="">
                                        <Button
                                            variant="destructive"
                                            size="lg"
                                            className="font-bold px-14"
                                        >
                                            Submit
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="mt-96">
                        <h6 className="text-[24px] font-bold text-primary">
                            Partner with Us Today
                        </h6>
                        <p className="font-[300]">
                            Ready to elevate your business with custom t-shirts?
                            Contact Pikora and transform your ideas into
                            wearable art. <br />
                            Let’s Print Success Together!
                            <br />
                            [Get a Quote] | [Contact Us] | <Link href={route('product.index')}>[Explore Our
                                Portfolio]</Link>
                        </p>
                    </div>
                </Container>
            </section>
            <Footer />
        </>
    );
}

personalUse.layout = (page) => <App children={page} />;
