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
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Link, router } from "@inertiajs/react";
import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";

export default function Create({ postCategory }) {
    const [values, setValues] = useState({
        post_category_name: postCategory.post_category_name,
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
        router.put(
            route("admin.post-category.update", postCategory.id),
            values,
        );
    }
    return (
        <Card className="bg-white border-primary/20">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="mb-2">
                            Edit Post Category
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
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <Label htmlFor="post_category_name">
                            Post Category Name
                        </Label>
                        <Input
                            className="bg-white mt-2"
                            id="post_category_name"
                            value={values.post_category_name}
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
