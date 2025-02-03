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
import { Textarea } from "@/Components/ui/textarea";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Link } from "@inertiajs/react";
import { ArrowLeft } from "lucide-react";
import React from "react";

export default function Create({ message }) {
    return (
        <Card className="bg-white border-primary/20">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="mb-2">
                            Detail Mail Message
                        </CardTitle>
                        <CardDescription>
                            Detail Form Mail Message
                        </CardDescription>
                    </div>
                    <Link
                        className={`${buttonVariants({ variant: "destructive", size: "sm" })}`}
                        href={route("admin.mail-message.index")}
                    >
                        <ArrowLeft />
                    </Link>
                </div>
            </CardHeader>
            <CardContent>
                <div className="mb-3">
                    <Label htmlFor="topic">Topic</Label>
                    <Input
                        readOnly
                        className="bg-white mt-2"
                        id="topic"
                        value={message.topic}
                    />
                </div>
                <div className="mb-3">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                        readOnly
                        className="bg-white mt-2"
                        id="name"
                        value={message.name}
                    />
                </div>
                <div className="mb-3">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        readOnly
                        className="bg-white mt-2"
                        id="email"
                        value={message.email}
                    />
                </div>
                <div className="mb-3">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                        readOnly
                        className="bg-white mt-2"
                        id="email"
                        value={message.description}
                    />
                </div>
            </CardContent>
        </Card>
    );
}

Create.layout = (page) => <DashboardLayout children={page} />;
