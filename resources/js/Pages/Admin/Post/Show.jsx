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

export default function Create({ post }) {
    const [values, setValues] = useState({
        post_category: post.post_category.post_category_name,
        post_thumbnail: post.post_thumbnail,
        post_name: post.post_name,
        post_content: post.post_content,
        meta_title: post.meta_title,
        meta_description: post.meta_description,
    });
    return (
        <Card className="bg-white border-primary/20">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="mb-2">Detail Post</CardTitle>
                        <CardDescription>Fill Form Post</CardDescription>
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
                <form>
                    <div className="grid gap-2 mb-3">
                        <Label htmlFor="post_thumbnail">Post Thumbnail</Label>
                        <img
                            className="w-full rounded-lg border-input h-[300px] object-contain border"
                            src={`/storage/${values.post_thumbnail}`}
                            alt={values.post_name}
                        />
                    </div>
                    <div className="grid gap-2 mb-3">
                        <Label htmlFor="post_name">Post Name</Label>
                        <Input
                            readOnly
                            className="bg-white"
                            id="post_name"
                            value={values.post_name}
                        />
                    </div>
                    <div className="grid gap-2 mb-3">
                        <Label htmlFor="post_category">Post Category</Label>
                        <Input
                            readOnly
                            className="bg-white"
                            id="post_category"
                            value={values.post_category}
                        />
                    </div>
                    <div className="grid gap-2 mb-3">
                        <Label htmlFor="post_content">Post Content</Label>
                        <Textarea
                            readOnly
                            className="bg-white"
                            id="post_content"
                            value={values.post_content}
                        />
                    </div>

                    <Separator className="my-6" />

                    <div className="grid gap-2 mb-3">
                        <Label htmlFor="meta_title">Meta Title</Label>
                        <Input
                            className="bg-white"
                            id="meta_title"
                            value={values.meta_title}
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
                        />
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}

Create.layout = (page) => <DashboardLayout children={page} />;
