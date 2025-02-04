import Container from "@/Components/Container";
import App from "@/Layouts/App";
import { Head, Link, router, useForm } from "@inertiajs/react";
import React, { useState } from "react";
import Footer from "@/Layouts/Footer";
import BlogCard from "@/Components/BlogCard";
import { IconlySearch } from "@/Icons/IconlySearch";
import NavbarBlog from "@/Layouts/NavbarBlog";
import { Separator } from "@/Components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { MessageSquare, MessageSquareMore } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { Button } from "@/Components/ui/button";

export default function Blog({
    postCategories,
    article,
    articles,
    comments,
    title,
    meta_title,
    meta_description,
}) {

    const [open, setOpen] = useState(false);

    const { data, setData, post, processing, errors } = useForm({
        your_name: "",
        your_comment: "",
        post_id: article.id,
        parent_id: "",
    });

    function submit(e) {
        e.preventDefault();
        router.post(route("comment.store"), data, {
            preserveScroll: true,
        });
        setOpen(false);
    }

    return (
        <>
            <Head title={title}>
                <meta name="title" content={meta_title} />
                <meta name="description" content={meta_description} />
            </Head>
            <NavbarBlog postCategories={postCategories} />
            <section className="mt-6 pb-14">
                <Container>
                    <div className="grid grid-cols-2 lg:grid-cols-12 gap-10">
                        <div className="col-span-2 lg:col-span-8">

                            <img
                                src={`/storage/${article.post_thumbnail}`}
                                className="w-full object-cover lg:h-[320px] rounded-lg lg:rounded-xl mb-6"
                                alt={article.post_name}
                            />
                            <h1 className="text-2xl lg:text-[32px] font-bold mb-4">
                                {article.post_name}
                            </h1>
                            <div className="tiptap not-prose" dangerouslySetInnerHTML={{
                                __html: article.post_content,
                            }} />
                            <div className="mt-20">
                                <h6 className="font-bold text-xl mb-1">Komentar</h6>
                                <p className="text-primary/60 text-sm">
                                    Ada {article.post_comments_count} komentar pada
                                    artikel ini.
                                </p>
                                <Separator className="my-2" />
                                <Dialog
                                    open={open}
                                    onOpenChange={() => (
                                        setOpen(!open),
                                        setData("parent_id"),
                                        setData("your_name"),
                                        setData("your_comment")
                                    )}
                                >
                                    <DialogTrigger asChild>
                                        <button className="mb-6 w-full border border-dashed border-primary/40 flex justify-center items-center text-primary/70 h-12 rounded text-sm hover:text-primary hover:border-primary transition-all hover:translate-x-px hover:-translate-y-px">
                                            Tambahkan Komentar
                                        </button>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-sm sm:max-w-xl px-4 rounded-lg bg-white">
                                        <DialogHeader>
                                            <DialogTitle>Komentar</DialogTitle>
                                        </DialogHeader>
                                        <form onSubmit={submit}>
                                            <div className="grid gap-4 py-4">
                                                <Input
                                                    required
                                                    id="name"
                                                    className="bg-white"
                                                    placeholder="Nama anda"
                                                    onChange={(e) =>
                                                        setData(
                                                            "your_name",
                                                            e.target.value,
                                                        )
                                                    }
                                                />
                                                <Textarea
                                                    required
                                                    id="username"
                                                    placeholder="Komentar anda"
                                                    className="bg-white"
                                                    onChange={(e) =>
                                                        setData(
                                                            "your_comment",
                                                            e.target.value,
                                                        )
                                                    }
                                                />
                                            </div>
                                            <DialogFooter>
                                                <Button type="submit">Kirim</Button>
                                            </DialogFooter>
                                        </form>
                                    </DialogContent>
                                </Dialog>
                                <div className="flex flex-col gap-y-2 mb-6 lg:mb-8">
                                    {comments.data.map((comment, index) => (
                                        <div key={index} className="w-100 rounded-lg">
                                            <div className="flex flex-col gap-4">
                                                <div className="flex items-top gap-4">
                                                    <Avatar className="w-10 h-10">
                                                        <AvatarImage src="" />
                                                        <AvatarFallback className="bg-red-100">
                                                            {comment.avatar}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <div className="flex flex-col gap-px">
                                                        <div className="flex gap-4 mt-1 items-center">
                                                            <div className="text-primary font-bold">
                                                                {comment.your_name}
                                                            </div>
                                                            <span className="font-normal text-sm text-primary/40">
                                                                {comment.created_at}
                                                            </span>
                                                        </div>
                                                        <p className="text-primary/70">
                                                            {comment.your_comment}
                                                        </p>
                                                        <div className="flex gap-x-3">
                                                            <button
                                                                onClick={() => (
                                                                    setOpen(true),
                                                                    setData(
                                                                        "parent_id",
                                                                        comment.id,
                                                                    )
                                                                )}
                                                                className="flex items-center group"
                                                            >
                                                                <div className="size-9 grid place-content-center rounded-full group-hover:bg-blue-200 transition-all">
                                                                    <MessageSquareMore className="stroke-1 stroke-gray-400 group-hover:stroke-blue-600 transition-all h-4 w-4 m-0 p-0" />
                                                                </div>
                                                                <div className="text-gray-400 text-sm font-[300] group-hover:text-blue-600">
                                                                    {
                                                                        comment.replies_count
                                                                    }
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                {comment.replies_count > 0 && (
                                                    <div className="flex flex-col gap-6 mb-8">
                                                        {comment.replies.map(
                                                            (reply, index) => {
                                                                return (
                                                                    <div
                                                                        key={index}
                                                                        className="ms-14 flex items-top gap-4"
                                                                    >
                                                                        <Avatar className="w-10 h-10">
                                                                            <AvatarImage src="" />
                                                                            <AvatarFallback className="bg-secondary">
                                                                                {
                                                                                    reply.avatar
                                                                                }
                                                                            </AvatarFallback>
                                                                        </Avatar>
                                                                        <div className="flex flex-col gap-px">
                                                                            <flex className="flex gap-4 mt-1 items-center">
                                                                                <div className="text-primary font-bold">
                                                                                    {
                                                                                        reply.your_name
                                                                                    }
                                                                                </div>
                                                                                <span className="font-normal text-sm text-primary/40">
                                                                                    {
                                                                                        reply.created_at
                                                                                    }
                                                                                </span>
                                                                            </flex>
                                                                            <p className="text-primary/70">
                                                                                {
                                                                                    reply.your_comment
                                                                                }
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                );
                                                            },
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <ul className="flex justify-center items-center gap-x-px">
                                    {comments.meta.links.map((link, index) => {
                                        return (
                                            <li key={index}>
                                                <Link
                                                    disabled={
                                                        link.url == null ? true : false
                                                    }
                                                    href={link.url || ""}
                                                    preserveScroll
                                                    className={`${link.url == null ? "text-gray-300 cursor-normal" : "hover:bg-primary hover:border-primary hover:text-white"} ${link.active ? "bg-primary text-white border-primary" : ""} w-8 h-8 lg:w-10 lg:h-8 border rounded flex text-sm lg:text-normal justify-center items-center rounded`}
                                                    dangerouslySetInnerHTML={{
                                                        __html: link.label,
                                                    }}
                                                />
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-2 lg:col-span-4">
                            <h5 className="text-xl md:text-xl font-bold mb-6">Related Article</h5>
                            <div className="grid gap-4">
                                {articles.data.map((post, index) => (
                                    <div key={index} className="col-span-1">
                                        <BlogCard post={post} imgheigh={"h-[100px] md:h-[150px] lg:h-[140px]"} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <Footer />
        </>
    );
}

Blog.layout = (page) => <App children={page} />;
