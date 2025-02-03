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
import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";

export default function Edit({ productCategories, product }) {
    const [values, setValues] = useState({
        product_thumbnail: null,
        product_name: product.product_name,
        product_description: product.product_description,
        product_category_id: product.product_category.product_category_name,
        link_lazada: product.link_lazada,
        link_shopee: product.link_shopee,
        link_tokopedia: product.link_tokopedia,
        meta_title: product.meta_title,
        meta_description: product.meta_description,
        _method: "PUT",
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
                newValues[id] = files[0]; // For the Product thumbnail
            }
        } else if (index !== undefined) {
            // Handle Product variants
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
        router.post(route("admin.product.update", product.id), values);
    }
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
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="grid gap-2 mb-3">
                        <Label htmlFor="product_thumbnail">
                            Product Thumbnail{" "}
                            <span className="text-red-500">
                                (Leave empty if you don't want to change it.)
                            </span>
                        </Label>
                        <Input
                            type="file"
                            className="bg-white"
                            id="product_thumbnail"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid gap-2 mb-3">
                        <Label htmlFor="product_name">Product Name</Label>
                        <Input
                            className="bg-white"
                            id="product_name"
                            value={values.product_name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid gap-2 mb-3">
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

                    <div className="grid gap-2 mb-3">
                        <Label htmlFor="product_description">
                            Product Content
                        </Label>
                        <Textarea
                            className="bg-white"
                            id="product_description"
                            value={values.product_description}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="grid gap-2 mb-3">
                        <Label htmlFor="link_shopee">Link Shopee</Label>
                        <Input
                            className="bg-white"
                            id="link_shopee"
                            value={values.link_shopee}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid gap-2 mb-3">
                        <Label htmlFor="link_tokopedia">Link Tokopedia</Label>
                        <Input
                            className="bg-white"
                            id="link_tokopedia"
                            value={values.link_tokopedia}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid gap-2 mb-3">
                        <Label htmlFor="link_lazada">Link Lazada</Label>
                        <Input
                            className="bg-white"
                            id="link_lazada"
                            value={values.link_lazada}
                            onChange={handleChange}
                        />
                    </div>
                    <Separator className="my-6" />

                    <div className="grid gap-2 mb-3">
                        <Label htmlFor="meta_title">Meta Title</Label>
                        <Input
                            className="bg-white"
                            id="meta_title"
                            value={values.meta_title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid gap-2 mb-3">
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

Edit.layout = (page) => <DashboardLayout children={page} />;
