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

export default function Create() {
    const [values, setValues] = useState({
        post_category_name: "",
        meta_title: "",
        meta_keyword: "",
        meta_description: "",
    });

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        router.post(route("admin.post-category.store"), values);
    }
    return (
        <Card className="bg-white border-primary/20">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="mb-2">
                            Add Post Category
                        </CardTitle>
                        <CardDescription>
                            Fill Form Post Category
                        </CardDescription>
                    </div>
                    <Link
                        className={`${buttonVariants({ variant: "destructive", size: "sm" })}`}
                        href={route("admin.post-category.index")}
                    >
                        <ArrowLeft />
                    </Link>
                </div>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="grid gap-3">
                    <div className="grid gap-2">
                        <Label htmlFor="post_category_name">
                            Post Category Name
                        </Label>
                        <Input
                            className="bg-white"
                            id="post_category_name"
                            value={values.post_category_name}
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
                    <div className="grid gap-2">
                        <Label htmlFor="meta_keyword">Meta Title</Label>
                        <Input
                            className="bg-white"
                            id="meta_keyword"
                            value={values.meta_keyword}
                            onChange={handleChange}
                        />
                    </div>
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
