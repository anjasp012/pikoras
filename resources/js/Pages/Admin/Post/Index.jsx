import { Button, buttonVariants } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
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
import { ChevronDown, ChevronUp, Edit, Eye, Plus, Trash } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

export default function Index({ posts }) {
    const [params, setParams] = useState(posts.filtered);

    const timeoutRef = useRef(null);

    const pickBy = (obj, predicate) => {
        return Object.fromEntries(
            Object.entries(obj).filter(([key, value]) => predicate(value, key)),
        );
    };

    useEffect(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            router.visit(route("admin.post.index"), {
                data: {
                    ...pickBy(
                        params,
                        (value) => value !== null && value !== undefined,
                    ),
                    page: params.q ? 1 : params.page,
                },
                preserveState: true,
                preserveScroll: true,
            });
        }, 150);

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [params]);

    const handleChangePaginate = (e) => {
        const newParams = { ...params };
        newParams["load"] = e;
        setParams(newParams);
    };

    const onChange = (e) => {
        const newParams = { ...params };
        newParams[e.target.id] = e.target.value;
        setParams(newParams);
    };

    const sort = (item) => {
        setParams({
            ...params,
            field: item,
            direction: params.direction == "asc" ? "desc" : "asc",
        });
    };

    const deletePost = (id) => {
        router.delete(route("admin.post.destroy", id), {
            preserveState: true,
            preserveScroll: true,
        });
    };

    return (
        <Card className="bg-white border-primary/20">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="mb-2">Post</CardTitle>
                        <CardDescription>
                            Recent Post from your system
                        </CardDescription>
                    </div>
                    <Link
                        className={`${buttonVariants({ variant: "default", size: "sm" })}`}
                        href={route("admin.post.create")}
                    >
                        <Plus />
                    </Link>
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between">
                    <div className="w-2/12 flex items-center justify-end">
                        <Select
                            id="load"
                            value={params.load}
                            onValueChange={handleChangePaginate} // Passing the correct handler
                        >
                            <SelectTrigger className="w-full bg-white border-primary/20">
                                <SelectValue>{params.load}</SelectValue>
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                <SelectItem value={10}>10</SelectItem>
                                <SelectItem value={20}>20</SelectItem>
                                <SelectItem value={30}>30</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="w-3/12 flex items-center justify-end">
                        <Input
                            name="q"
                            id="q"
                            className="bg-white border-primary/20"
                            onChange={onChange}
                            value={params.q}
                        />
                    </div>
                </div>
                <div className="rounded-md border border-primary/20 my-4">
                    <Table>
                        <TableHeader>
                            <TableRow className="hover:bg-primary/10">
                                <TableHead className="text-center">
                                    No
                                </TableHead>
                                <TableHead>Thumbnail</TableHead>
                                <TableHead>
                                    <div
                                        onClick={() => sort("post_name")}
                                        className="hover:text-primary cursor-pointer flex items-center gap-x-10"
                                    >
                                        Name
                                        {params.direction == "asc" ? (
                                            <ChevronUp className="h-3 w-3" />
                                        ) : (
                                            <ChevronDown className="h-3 w-3" />
                                        )}
                                    </div>
                                </TableHead>
                                <TableHead>
                                    <div
                                        onClick={() => sort("created_at")}
                                        className="hover:text-primary cursor-pointer flex items-center gap-x-10"
                                    >
                                        Created
                                        {params.direction == "asc" ? (
                                            <ChevronUp className="h-3 w-3" />
                                        ) : (
                                            <ChevronDown className="h-3 w-3" />
                                        )}
                                    </div>
                                </TableHead>
                                <TableHead>
                                    <div
                                        onClick={() => sort("view_count")}
                                        className="hover:text-primary cursor-pointer flex items-center gap-x-10"
                                    >
                                        View Count
                                        {params.direction == "asc" ? (
                                            <ChevronUp className="h-3 w-3" />
                                        ) : (
                                            <ChevronDown className="h-3 w-3" />
                                        )}
                                    </div>
                                </TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {posts.data.map((post, index) => (
                                <TableRow
                                    key={index}
                                    className="hover:bg-primary/10"
                                >
                                    <TableCell className="text-center">
                                        {posts.meta.from + index}
                                    </TableCell>
                                    <TableCell>
                                        <img
                                            src={post.post_thumbnail}
                                            className="w-[80px] h-[80px] object-cover rounded"
                                            alt={post.post_name}
                                        />
                                    </TableCell>
                                    <TableCell>{post.post_name}</TableCell>
                                    <TableCell>28 Januari 2025</TableCell>
                                    <TableCell>{post.view_count}</TableCell>
                                    <TableCell>
                                        <div className="flex gap-1">
                                            <Link
                                                href={route(
                                                    "admin.post.edit",
                                                    post.id,
                                                )}
                                                className={buttonVariants({
                                                    variant: "warning",
                                                    size: "sm",
                                                })}
                                                size="sm"
                                            >
                                                <Edit />
                                            </Link>
                                            <Link
                                                href={route(
                                                    "admin.post.show",
                                                    post.id,
                                                )}
                                                className={buttonVariants({
                                                    variant: "info",
                                                    size: "sm",
                                                })}
                                                size="sm"
                                            >
                                                <Eye />
                                            </Link>
                                            <Button
                                                onClick={() =>
                                                    deletePost(post.id)
                                                }
                                                variant="destructive"
                                                size="sm"
                                            >
                                                <Trash />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <ul className="flex items-center gap-x-px">
                    {posts.meta.links.map((link, index) => (
                        // <li><Link disabled={link.url == null ? true : false} href={link.url || ''} className={`${link.url == null ? 'text-gray-300 cursor-normal' : '' } ${link.active ? 'bg-primary text-white' : ''} w-12 h-9 border rounded flex justify-center items-center rounded`} dangerouslySetInnerHTML={{ __html: link.label }}/></li>
                        <li key={index}>
                            <button
                                className={`${link.url == null ? "text-gray-300 cursor-normal" : ""} ${link.active ? "bg-primary text-white" : ""} w-12 h-9 border rounded flex justify-center items-center rounded`}
                                disabled={link.url == null ? true : false}
                                onClick={() =>
                                    setParams({
                                        ...params,
                                        page: new URL(
                                            link.url,
                                        ).searchParams.get("page"),
                                    })
                                }
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}

Index.layout = (page) => <DashboardLayout children={page} />;
