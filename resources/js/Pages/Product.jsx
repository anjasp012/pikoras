import Container from "@/Components/Container";
import App from "@/Layouts/App";
import { Head, Link } from "@inertiajs/react";
import Footer from "@/Layouts/Footer";
import SidebarProduct from "@/Layouts/SidebarProduct";
import ProductCard from "@/Components/ProductCard";
import React from "react";
import SheetProduct from "@/Layouts/SheetProduct";

export default function Product({
    productCategories,
    products,
    title,
    meta_title,
    meta_description,
    meta_keyword,
}) {

    console.log(products);


    return (
        <>
            <Head title={title}>
                <meta name="title" content={meta_title} />
                <meta name="description" content={meta_description} />
                <meta name="keyword" content={meta_keyword} />
            </Head>

            <section className="mt-8 sm:mt-12 pb-14">
                <Container>
                    <div className="grid grid-cols-2 lg:grid-cols-12 md:gap-10">
                        <div className="hidden lg:block md:col-span-3">
                            <SidebarProduct
                                productCategories={productCategories}
                            />
                        </div>
                        <div className="col-span-2 md:col-span-9">
                            <div className="flex gap-x-3 items-center mb-4 sm:mb-10">
                                {/* <button className='md:hidden border p-1 rounded hover:bg-primary hover:text-white transition-auto'><Menu className='w-6 h-6 sm:w-8 sm:h-8'/></button> */}
                                <SheetProduct
                                    productCategories={productCategories}
                                />
                                <h3 className="text-xl sm:text-[32px] font-bold">
                                    {title}
                                </h3>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-12 gap-6 sm:gap-10 mb-14">
                                {products.data.map((product, index) => (
                                    <div
                                        key={index}
                                        className="col-span-1 sm:col-span-4 "
                                    >
                                        <ProductCard product={product} />
                                    </div>
                                ))}
                            </div>

                            {products.total > 9 &&

                                <ul className="flex justify-center items-center gap-x-px">
                                    {products.links.map((link, index) => {
                                        return (
                                            <li key={index}>
                                                <Link
                                                    disabled={
                                                        link.url == null
                                                            ? true
                                                            : false
                                                    }
                                                    href={link.url || ""}
                                                    preserveScroll
                                                    className={`${link.url == null ? "text-gray-300 cursor-normal" : "hover:bg-primary hover:border-primary hover:text-white"} ${link.active ? "bg-primary text-white border-primary" : ""} w-10 h-8 border rounded flex justify-center items-center rounded`}
                                                    dangerouslySetInnerHTML={{
                                                        __html: link.label,
                                                    }}
                                                />
                                            </li>
                                        );
                                    })}
                                </ul>
                            }
                        </div>
                    </div>
                </Container>
            </section>
            <Footer />
        </>
    );
}

Product.layout = (page) => <App children={page} />;
