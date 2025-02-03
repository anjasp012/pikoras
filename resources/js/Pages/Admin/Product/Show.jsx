import { Button, buttonVariants } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Separator } from "@/Components/ui/separator";
import { Textarea } from "@/Components/ui/textarea";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Link } from "@inertiajs/react";
import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";

export default function Edit({ productCategories, product }) {
    const [values, setValues] = useState({
        product_thumbnail: product.product_thumbnail,
        product_name: product.product_name,
        product_description: product.product_description,
        product_category: product.product_category.product_category_name,
        link_lazada: product.link_lazada,
        link_shopee: product.link_shopee,
        link_tokopedia: product.link_tokopedia,
        meta_title: product.meta_title,
        meta_description: product.meta_description,
    });

    return (
        <Card className="bg-white border-primary/20">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="mb-2">Add post</CardTitle>
                        <CardDescription>Fill Form post</CardDescription>
                    </div>
                    <Link
                        className={`${buttonVariants({ variant: "destructive", size: "sm" })}`}
                        href={route("admin.product.index")}
                    >
                        <ArrowLeft />
                    </Link>
                </div>
            </CardHeader>
            <CardContent>
                <div className="grid gap-2 mb-3">
                    <Label htmlFor="productt_thumbnail">
                        Product Thumbnail
                    </Label>
                    <img
                        className="w-full rounded-lg border-input h-[300px] object-contain border"
                        src={`/storage/${values.product_thumbnail}`}
                        alt={values.post_name}
                    />
                </div>
                <div className="grid gap-2 mb-3">
                    <Label htmlFor="product_name">Product Name</Label>
                    <Input
                        className="bg-white"
                        readOnly
                        id="product_name"
                        value={values.product_name}
                    />
                </div>
                <div className="grid gap-2 mb-3">
                    <Label htmlFor="product_category">Product Category</Label>
                    <Input
                        className="bg-white"
                        readOnly
                        id="product_category"
                        value={values.product_category}
                    />
                </div>

                <div className="grid gap-2 mb-3">
                    <Label htmlFor="product_description">
                        Product Description
                    </Label>
                    <Textarea
                        className="bg-white"
                        readOnly
                        id="product_description"
                        value={values.product_description}
                    />
                </div>

                <div className="grid gap-2 mb-3">
                    <Label htmlFor="link_shopee">Link Shopee</Label>
                    <Input
                        className="bg-white"
                        readOnly
                        id="link_shopee"
                        value={values.link_shopee}
                    />
                </div>
                <div className="grid gap-2 mb-3">
                    <Label htmlFor="link_tokopedia">Link Tokopedia</Label>
                    <Input
                        className="bg-white"
                        readOnly
                        id="link_tokopedia"
                        value={values.link_tokopedia}
                    />
                </div>
                <div className="grid gap-2 mb-3">
                    <Label htmlFor="link_lazada">Link Lazada</Label>
                    <Input
                        className="bg-white"
                        readOnly
                        id="link_lazada"
                        value={values.link_lazada}
                    />
                </div>
                <Separator className="my-6" />

                <div className="grid gap-2 mb-3">
                    <Label htmlFor="meta_title">Meta Title</Label>
                    <Input
                        className="bg-white"
                        readOnly
                        id="meta_title"
                        value={values.meta_title}
                    />
                </div>
                <div className="grid gap-2 mb-3">
                    <Label htmlFor="meta_description">Meta Description</Label>
                    <Textarea
                        className="bg-white"
                        readOnly
                        id="meta_description"
                        value={values.meta_description}
                    />
                </div>
            </CardContent>
        </Card>
    );
}

Edit.layout = (page) => <DashboardLayout children={page} />;
