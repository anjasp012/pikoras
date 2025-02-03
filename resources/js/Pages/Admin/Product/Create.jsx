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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { Separator } from "@/Components/ui/separator";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import { Textarea } from "@/Components/ui/textarea";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Link, router } from "@inertiajs/react";
import { ArrowLeft, Edit, Eye, Plus, Trash } from "lucide-react";
import React, { useMemo, useRef, useState } from "react";

export default function Create({ productCategories }) {
    const [values, setValues] = useState({
        product_name: "",
        product_description: "",
        product_category_id: "",
        link_lazada: "",
        link_shopee: "",
        link_tokopedia: "",
        product_variants: [
            {
                product_variant_color: "#000000",
                product_variant_image: null, // Nilai awalnya null karena belum ada file yang dipilih
            },
            {
                product_variant_color: "#8E1C29",
                product_variant_image: null, // Nilai awalnya null karena belum ada file yang dipilih
            },
            {
                product_variant_color: "#263550",
                product_variant_image: null, // Nilai awalnya null karena belum ada file yang dipilih
            },
            {
                product_variant_color: "#49525B",
                product_variant_image: null, // Nilai awalnya null karena belum ada file yang dipilih
            },
            {
                product_variant_color: "#ABB3B6",
                product_variant_image: null, // Nilai awalnya null karena belum ada file yang dipilih
            },
            {
                product_variant_color: "#E4C99F",
                product_variant_image: null, // Nilai awalnya null karena belum ada file yang dipilih
            },
            {
                product_variant_color: "#FFFFFF",
                product_variant_image: null, // Nilai awalnya null karena belum ada file yang dipilih
            },
        ],
        meta_title: "",
        meta_description: "",
    });
    const handleChangeCategory = (e) => {
        const newValues = { ...values };
        newValues["product_category_id"] = e;
        setValues(newValues);
    };

    const handleChange = (e, index, field) => {
        const { id, value, type, files } = e.target;
        const newValues = { ...values };

        if (type === "file") {
            // Handle file inputs like image uploads
            if (index !== undefined) {
                newValues.product_variants[index][field] = files[0]; // For variant image
            } else {
                newValues[id] = files[0]; // For the product thumbnail
            }
        } else if (index !== undefined) {
            // Handle product variants
            newValues.product_variants[index][field] = value;
        } else {
            // Handle simple text or color inputs
            newValues[id] = value;
        }

        setValues(newValues);
    };

    const addVariant = () => {
        // Menambahkan varian baru dengan nilai default
        setValues((prevState) => ({
            ...prevState,
            product_variants: [
                ...prevState.product_variants,
                {
                    product_variant_color: "",
                    product_variant_image: null,
                },
            ],
        }));
    };

    function handleSubmit(e) {
        e.preventDefault();
        router.post(route("admin.product.store"), values);
    }
    return (
        <Card className="bg-white border-primary/20">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="mb-2">Add Product</CardTitle>
                        <CardDescription>Fill Form Product</CardDescription>
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
                <form
                    onSubmit={handleSubmit}
                    className="grid gap-3"
                    encType="multipart/form-data"
                >
                    <div className="grid gap-2">
                        <Label htmlFor="product_thumbnail">
                            Product Thumbnail
                        </Label>
                        <Input
                            type="file"
                            className="bg-white"
                            id="product_thumbnail"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="product_name">Product Name</Label>
                        <Input
                            className="bg-white"
                            id="product_name"
                            value={values.product_name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="product_category_id">
                            Product Category
                        </Label>
                        <Select
                            id="product_category_id"
                            value={values.product_category_id}
                            onValueChange={handleChangeCategory} // Passing the correct handler
                        >
                            <SelectTrigger className="w-full bg-white">
                                <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                {productCategories.map((category, index) => (
                                    <SelectItem
                                        value={category.product_category_name}
                                        key={index}
                                    >
                                        {category.product_category_name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="product_description">
                            Product Description
                        </Label>
                        <Textarea
                            className="bg-white"
                            id="product_description"
                            value={values.product_description}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="product_variant">Product Variant</Label>
                        <Card className="bg-white border-input">
                            <CardContent className="p-3">
                                {values.product_variants.map(
                                    (variant, index) => (
                                        <div
                                            key={index}
                                            className="grid grid-cols-[38px_1fr] gap-4 items-center mb-4"
                                        >
                                            <Input
                                                className="w-full h-[38px] border border-input block rounded p-0"
                                                type="color"
                                                value={
                                                    variant.product_variant_color
                                                }
                                                onChange={(e) =>
                                                    handleChange(
                                                        e,
                                                        index,
                                                        "product_variant_color",
                                                    )
                                                }
                                            />
                                            <Input
                                                type="file"
                                                className="bg-white"
                                                id={`product_thumbnail_${index}`}
                                                onChange={(e) =>
                                                    handleChange(
                                                        e,
                                                        index,
                                                        "product_variant_image",
                                                    )
                                                }
                                            />
                                        </div>
                                    ),
                                )}

                                <Button
                                    type="button"
                                    variant="success"
                                    className="w-full mt-2"
                                    onClick={addVariant}
                                >
                                    <Plus />
                                    Add Variant
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="link_shopee">Link Shopee</Label>
                        <Input
                            className="bg-white"
                            id="link_shopee"
                            value={values.link_shopee}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="link_tokopedia">Link Tokopedia</Label>
                        <Input
                            className="bg-white"
                            id="link_tokopedia"
                            value={values.link_tokopedia}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="link_lazada">Link Lazada</Label>
                        <Input
                            className="bg-white"
                            id="link_lazada"
                            value={values.link_lazada}
                            onChange={handleChange}
                        />
                    </div>
                    <Separator className="my-3" />

                    <div className="grid gap-2">
                        <Label htmlFor="meta_title">Meta Title</Label>
                        <Input
                            className="bg-white"
                            id="meta_title"
                            value={values.meta_title}
                            onChange={handleChange}
                        />
                    </div>
                    {/* <div className="grid gap-2">
                        <Label htmlFor="meta_keyword">Meta Keyword</Label>
                        <Input className="bg-white" id="meta_keyword" value={values.meta_keyword} onChange={handleChange} />
                    </div> */}
                    <div className="grid gap-2">
                        <Label htmlFor="meta_description">
                            Meta Description
                        </Label>
                        <Textarea
                            className="bg-white"
                            id="meta_description"
                            value={values.meta_description}
                            onChange={handleChange}
                        />
                    </div>
                    <Button variant="default">Save</Button>
                </form>
            </CardContent>
        </Card>
    );
}

Create.layout = (page) => <DashboardLayout children={page} />;
