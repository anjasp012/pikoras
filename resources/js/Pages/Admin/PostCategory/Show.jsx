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
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Link, router } from "@inertiajs/react";
import { ArrowLeft, Edit, Eye, Plus, Trash } from "lucide-react";
import React, { useState } from "react";

export default function Create({ postCategory }) {
    const [values, setValues] = useState({
        post_category_name: postCategory.post_category_name,
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
                            Detail Post Category
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
                            readOnly
                            className="bg-white mt-2"
                            id="post_category_name"
                            value={values.post_category_name}
                            onChange={handleChange}
                        />
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}

Create.layout = (page) => <DashboardLayout children={page} />;
