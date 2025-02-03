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

export default function Create({ productCategory }) {
    const [values, setValues] = useState({
        product_category_name: productCategory.product_category_name,
        meta_title: productCategory.meta_title,
        meta_keyword: productCategory.meta_keyword,
        meta_description: productCategory.meta_description,
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
            route("admin.product-category.update", productCategory.id),
            values,
        );
    }
    return (
        <Card className="bg-white border-primary/20">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="mb-2">
                            Detail Product Category
                        </CardTitle>
                        <CardDescription>
                            Fill Form Product Category
                        </CardDescription>
                    </div>
                    <Link
                        className={`${buttonVariants({ variant: "destructive", size: "sm" })}`}
                        href={route("admin.product-category.index")}
                    >
                        <ArrowLeft />
                    </Link>
                </div>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <Label htmlFor="product_category_name">
                            Product Category Name
                        </Label>
                        <Input
                            readOnly
                            className="bg-white mt-2"
                            id="product_category_name"
                            value={values.product_category_name}
                            onChange={handleChange}
                        />
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}

Create.layout = (page) => <DashboardLayout children={page} />;
