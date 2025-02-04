import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import { Link } from "@inertiajs/react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { Button } from "@/Components/ui/button";
import StarReview from "./StarReview";

export default function ProductCard({ product }) {
    const [imageSrc, setImageSrc] = useState(
        `/storage/${product.product_thumbnail}`,
    ); // Initial image source

    // Function to change the image when a variant color is clicked
    const changeImage = (newImage) => {
        setImageSrc(newImage); // Update the image source
    };

    return (
        <Card
            className={cn(
                "w-full",
                "group px-0 overflow-hidden bg-white border-none shadow-none rounded-none",
            )}
        >
            <CardHeader className="p-0">
                <Dialog>
                    <DialogTrigger asChild>
                        <div className="overflow-hidden rounded-xl sm:rounded-3xl w-full h-[140px] sm:h-[280px] bg-[#f7f7f7]">
                            <img
                                id="img"
                                src={imageSrc}
                                className="hover:scale-105 transition-all rounded-xl sm:rounded-3xl w-full h-[140px] sm:h-[280px] object-contain object-top"
                                alt={product.product_name}
                            />
                        </div>
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
            </CardHeader>
            <CardContent className="px-0 py-4">
                <div className="flex flex-col mb-3">
                    <Link href={route("product.detail", product.product_slug)}>
                        <h5 className="font-semibold mb-px sm:text-normal group-hover:text-primary">
                            {product.product_name}
                        </h5>
                    </Link>
                    <div className="flex gap-px sm:gap-2 items-center">
                        {/* const rating = 3.5; */}

                        <div className="flex gap-px">
                            <StarReview review={4.3} />
                        </div>

                        <small className="text-[8px] text-[#263D66] text-light">
                            100 Reviews.
                        </small>
                    </div>
                </div>
                <p className="font-[300] leading-[120%] mb-2 text-xs sm:text-[14px] line-clamp-2">
                    {product.product_description}
                </p>
                {product.product_variants_count > 0 && (
                    <div id="colors" className="mb-3">
                        <span className="font-[300] text-[11px] block mb-1">
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
                                        className={`h-3 w-3 sm:h-4 sm:w-4 block sm:rounded rounded-sm`}
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
                    <span className="font-[300] text-[11px] block mb-1">
                        Available on:
                    </span>
                    <div className="grid grid-cols-3 lg:grid-cols-11 items-center gap-3 lg:gap-6">
                        <a
                            className="col-span-1 lg:col-span-3"
                            href={`${product.link_shopee}`}
                        >
                            <img
                                src="/assets/img/shopee.png"
                                className="w-full"
                                alt="shopee"
                            />
                        </a>
                        <a
                            className="col-span-1 lg:col-span-3 mt-px md:mt-px scale-110 lg:scale-125"
                            href={`${product.link_tokopedia}`}
                        >
                            <img
                                src="/assets/img/tokopedia.png"
                                className="w-full"
                                alt="tokopedia"
                            />
                        </a>
                        <a
                            className="col-span-1 lg:col-span-3 mt-1 md:mt-1"
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
            </CardContent>
        </Card>
    );
}
