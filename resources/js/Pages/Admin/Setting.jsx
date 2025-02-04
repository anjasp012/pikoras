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

export default function Setting({ auth, setting }) {
    console.log(auth);

    const [values, setValues] = useState({
        email: auth.user.email,
        name: auth.user.name,
        password: "",
        whatsapp_number: setting.whatsapp_number,
        whatsapp_message: setting.whatsapp_message,
        whatsapp_hover_message: setting.whatsapp_hover_message,
        link_shopee: setting.link_shopee,
        link_lazada: setting.link_lazada,
        link_tokopedia: setting.link_tokopedia
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
        router.put(route("admin.setting.update", setting.id), values);
    }
    return (
        <Card className="bg-white border-primary/20">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="mb-2">
                            Setting
                        </CardTitle>
                        <CardDescription>
                            Update Setting System
                        </CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="grid gap-3">
                    <div className="grid gap-2">
                        <Label htmlFor="name">
                            Name
                        </Label>
                        <Input
                            className="bg-white"
                            id="name"
                            value={values.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">
                            Email
                        </Label>
                        <Input
                            className="bg-white"
                            id="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">
                            Password{" "}
                            <span className="text-red-500">
                                (Leave empty if you don't want to change it.)
                            </span>
                        </Label>
                        <Input
                            className="bg-white"
                            id="email"
                            value={values.password}
                            onChange={handleChange}
                        />
                    </div>
                    <Separator className="my-3" />
                    <div className="grid gap-2">
                        <Label htmlFor="whatsapp_number">
                            Whatsapp Number
                        </Label>
                        <Input
                            placeholder="+62"
                            className="bg-white"
                            id="whatsapp_number"
                            value={values.whatsapp_number}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="whatsapp_hover_message">
                            Whatsapp Hover Message
                        </Label>
                        <Textarea
                            className="bg-white"
                            id="whatsapp_hover_message"
                            value={values.whatsapp_hover_message}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="whatsapp_message">
                            Whatsapp Message
                        </Label>
                        <Textarea
                            className="bg-white"
                            id="whatsapp_message"
                            value={values.whatsapp_message}
                            onChange={handleChange}
                        />
                    </div>
                    <Separator className="my-3" />

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
                        <Label htmlFor="link_lazada">Link Lazada</Label>
                        <Input
                            className="bg-white"
                            id="link_lazada"
                            value={values.link_lazada}
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
                    <Button variant="default">Save</Button>
                </form>
            </CardContent>
        </Card>
    );
}

Setting.layout = (page) => <DashboardLayout children={page} />;
