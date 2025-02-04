import Container from "@/Components/Container";
import App from "@/Layouts/App";
import React, { useState } from "react";
import Footer from "@/Layouts/Footer";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { Head, Link, router, useForm } from "@inertiajs/react";
import ProductCard from "@/Components/ProductCard";
import { ArrowRight, ChevronRight } from "lucide-react";
import StarReview from "@/Components/StarReview";
import { Label } from "@/Components/ui/label";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";

export default function ProductDetail({ products, product, review, title, meta_title, meta_description }) {
    const { data, setData, post, processing, errors } = useForm({
        product_id: product.id,
        rating: 0,
    });

    const [open, setOpen] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(values);

        router.post(route("product.submitRating"), data);
        setOpen(false);
    }

    const [imageSrc, setImageSrc] = useState(
        `/storage/${product.product_thumbnail}`,
    ); // Initial image source


    // Function to change the image when a variant color is clicked
    const changeImage = (newImage) => {
        setImageSrc(newImage); // Update the image source
    };

    return (
        <>
            <Head title={meta_title}>
                <meta name="title" content={meta_title} />
                <meta name="description" content={meta_description} />
                {/* <meta name="keyword" content={meta_keyword} /> */}
            </Head>
            <section className="mt-8 sm:mt-12 pb-14">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                        <div className="md:col-span-5">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <img
                                        id="img"
                                        src={imageSrc}
                                        className="rounded-lg w-full object-cover border"
                                        alt={product.product_name}
                                    />
                                </DialogTrigger>
                                <DialogContent className="w-full bg-transparant border-none shadow-none p-0">
                                    <DialogTitle className="hidden"></DialogTitle>
                                    <DialogDescription className="hidden"></DialogDescription>
                                    <div>
                                        <img
                                            id="img"
                                            src={imageSrc}
                                            className="rounded-xl sm:rounded-3xl w-full object-cover"
                                            alt={product.product_name}
                                        />
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>
                        <div className="md:col-span-7">
                            <div className="mb-6">
                                <h1 className="text-2xl md:text-4xl font-bold mb-1">
                                    {product.product_name}
                                </h1>
                                <div className="flex items-center gap-4">
                                    <span className="bg-primary text-white px-4 py-1 text-xs rounded-full">{product.product_category.product_category_name}</span>
                                    <div className="flex gap-px sm:gap-2 items-center">
                                        {/* const rating = 3.5; */}

                                        <div className="flex gap-px">
                                            <StarReview size="sm:h-4 sm:w-4" review={review} />
                                        </div>

                                        <small className="text-[12px] text-[#263D66] text-light">
                                            {product.product_reviews_count} Reviews.
                                        </small>
                                        <Dialog open={open}
                                            onOpenChange={() => (
                                                setOpen(!open),
                                                setData("rating", 0)
                                            )}>
                                            <DialogTrigger asChild>
                                                <Button size="sm" className="h-5 px-2 rounded">Tambah Review</Button>
                                            </DialogTrigger>
                                            <DialogContent className="sm:max-w-[425px]">
                                                <form onSubmit={handleSubmit}>

                                                    <DialogHeader>
                                                        <DialogTitle>Tambahkan Rating anda</DialogTitle>
                                                    </DialogHeader>
                                                    <div className="grid gap-4 py-4">
                                                        <div className="grid grid-cols-4 items-center gap-4">
                                                            <Label htmlFor="name" className="text-right">
                                                                Rating 1-5
                                                            </Label>
                                                            <Input id="rating" type="number" className="col-span-3" required onChange={(e) => setData('rating', e.target.value)} min="1" max="5" />
                                                        </div>
                                                    </div>
                                                    <DialogFooter>
                                                        <Button type="submit">Save changes</Button>
                                                    </DialogFooter>
                                                </form>
                                            </DialogContent>
                                        </Dialog>
                                    </div>
                                </div>
                            </div>
                            <p className="font-[300] leading-[120%] mb-2 md:text-lg">
                                {product.product_description}
                            </p>
                            {product.product_variants_count > 0 && (
                                <div id="colors" className="mb-3">
                                    <span className="font-bold block mb-1">
                                        Available Colors
                                    </span>
                                    <div className="flex gap-1 flex-wrap">
                                        {product.product_variants.map(
                                            (variant, index) => (
                                                <button
                                                    key={index}
                                                    onClick={(e) => (
                                                        e.preventDefault(),
                                                        changeImage(
                                                            `/storage/${variant.product_variant_image}`,
                                                        )
                                                    )} // Change image on click
                                                    className={`h-6 w-6 sm:h-5 sm:w-5 block rounded-sm`}
                                                    style={{
                                                        backgroundColor:
                                                            variant.product_variant_color,
                                                    }}
                                                ></button>
                                            ),
                                        )}
                                    </div>
                                </div>
                            )}
                            <div id="market">
                                <span className="mt-4 md:text-lg block font-medium mb-1">
                                    Available on:
                                </span>
                                <div className="grid grid-cols-8 md:grid-cols-10 items-center gap-6 md:gap-8">
                                    <a
                                        className="col-span-2"
                                        href={`${product.link_shopee}`}
                                    >
                                        <img
                                            src="/assets/img/shopee.png"
                                            className="w-full"
                                            alt="shopee"
                                        />
                                    </a>
                                    <a
                                        className="col-span-2 mt-1"
                                        href={`${product.link_tokopedia}`}
                                    >
                                        <img
                                            src="/assets/img/tokopedia.png"
                                            className="w-full scale-125"
                                            alt="tokopedia"
                                        />
                                    </a>
                                    <a
                                        className="col-span-2 mt-2"
                                        href={`${product.link_lazada}`}
                                    >
                                        <img
                                            src="/assets/img/lazada.png"
                                            className="w-full"
                                            alt="lazada"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className="pb-14">
                <Container>
                    <div className="flex justify-between items-center mb-6">
                        <h5 className="text-xl md:text-[26px] font-bold">Related Products</h5>
                        <Link href={route('product.index')} className="text-sm md:text-normal flex items-center gap-2 hover:text-primary">All Product <ChevronRight size={14} /> </Link>
                    </div>
                    <div className="grid grid-cols-12 gap-10">
                        {products.map((productr, index) => (
                            <div
                                key={index}
                                className="col-span-6 sm:col-span-4 md:col-span-3"
                            >
                                <ProductCard product={productr} />
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
            <Footer />
        </>
    );
}

ProductDetail.layout = (page) => <App children={page} />;
