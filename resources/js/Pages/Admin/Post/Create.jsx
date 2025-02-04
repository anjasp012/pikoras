import TipTap from "@/Components/TipTap";
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
import React, { useState } from "react";

export default function Create({ postCategories }) {
    const [values, setValues] = useState({
        post_thumbnail: "",
        post_name: "",
        post_content: "",
        post_category_id: "",
        meta_title: "",
        // meta_keyword: "",
        meta_description: "",
    });

    const handleChangeCategory = (e) => {
        const newValues = { ...values };
        newValues["post_category_id"] = e;
        setValues(newValues);
    };

    const handleChange = (e, index, field) => {
        const { id, value, type, files } = e.target;
        const newValues = { ...values };

        if (type === "file") {
            // Handle file inputs like image uploads
            if (index !== undefined) {
                newValues.post_variants[index][field] = files[0]; // For variant image
            } else {
                newValues[id] = files[0]; // For the Post thumbnail
            }
        } else if (index !== undefined) {
            // Handle Post variants
            newValues.post_variants[index][field] = value;
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
            post_variants: [
                ...prevState.post_variants,
                {
                    post_variant_color: "",
                    post_variant_image: null,
                },
            ],
        }));
    };

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(values);

        router.post(route("admin.post.store"), values);
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
                        href={route("admin.post.index")}
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
                        <Label htmlFor="post_thumbnail">Post Thumbnail</Label>
                        <Input
                            type="file"
                            className="bg-white"
                            id="post_thumbnail"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="post_name">Post Name</Label>
                        <Input
                            className="bg-white"
                            id="post_name"
                            value={values.post_name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="post_category_id">Post Category</Label>
                        <Select
                            id="post_category_id"
                            value={values.post_category_id}
                            onValueChange={handleChangeCategory} // Passing the correct handler
                        >
                            <SelectTrigger className="w-full bg-white">
                                <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                {postCategories.map((category, index) => (
                                    <SelectItem
                                        value={category.post_category_name}
                                        key={index}
                                    >
                                        {category.post_category_name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="post_content">Post Content</Label>
                        {/* <Textarea
                            className="bg-white"
                            id="post_content"
                            value={values.post_content}
                            onChange={handleChange}
                        /> */}
                        <TipTap values={values} setValues={setValues} />
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
