import { Link } from "@inertiajs/react";
import React from "react";

export default function BlogCard({ post, imgheigh }) {
    return (
        <Link href={route("blog.detail", post.post_slug)} className="group">
            <div className="border border-black rounded md:rounded-lg shadow-md hover:shadow-none hover:-translate-y-px hover:translate-x-px  transition-all">
                <img
                    src={post.post_thumbnail}
                    alt={post.post_name}
                    className={`w-full rounded md:rounded-lg object-cover object-left ${imgheigh}`} // imgheigh harus berupa nilai seperti 'h-48' atau 'h-64'
                />
                <div className="p-2 lg:py-4 lg:px-8">
                    <div className="flex flex-col gap-1">
                        <h5 className="font-bold lg:text-[24px] leading-[120%] group-hover:text-primary line-clamp-1">
                            {post.post_name}
                        </h5>
                        <span className="font-[300] text-[#263D66] text-xs lg:text-normal leading-[150%]">
                            By Pikora Team
                        </span>
                    </div>
                    <div className="mt-1 lg:mt-2 mb-1 font-[300] text-sm lg:text-normal line-clamp-2 md:line-clamp-3 leading-[150%]">

                        <div dangerouslySetInnerHTML={{
                            __html: post.post_content,
                        }} />
                    </div>
                    <Link
                        href=""
                        className="text-sm lg:text-normal group-hover:text-destructive"
                    >
                        Read More
                    </Link>
                    <div className="flex flex-col sm:flex-row justify-between font-[300] mt-5 text-xs lg:text-normal">
                        <span>{post.created_at}</span>
                        {/* <span className='hidden md:block'>0 Comment</span> */}
                    </div>
                </div>
            </div>
        </Link>
    );
}
