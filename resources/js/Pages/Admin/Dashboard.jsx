import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/Components/ui/card";
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/Components/ui/chart";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Link } from "@inertiajs/react";
import { ChartBar, ChartColumn, MessageCircle, Package, Rss, Users } from "lucide-react";
import React from "react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis } from "recharts";

export default function Dashboard({
    productCategoryCount,
    productCount,
    postCategoryCount,
    postCount,
    messageCount,
    visitorCount,
    visitorCounts,
}) {
    const chartData = visitorCounts.map((visitor) => ({
        date: visitor.date,
        desktop: visitor.desktop,
        mobile: visitor.mobile,
    }));

    const chartConfig = {
        visitors: {
            label: "Visitors",
        },
        desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
        },
        mobile: {
            label: "Mobile",
            color: "hsl(var(--chart-2))",
        },
    }

    const [timeRange, setTimeRange] = React.useState("90d")

    const filteredData = chartData.filter((item) => {
        const date = new Date(item.date)
        const referenceDate = new Date("2024-06-30")
        let daysToSubtract = 90
        if (timeRange === "30d") {
            daysToSubtract = 30
        } else if (timeRange === "7d") {
            daysToSubtract = 7
        }
        const startDate = new Date(referenceDate)
        startDate.setDate(startDate.getDate() - daysToSubtract)
        return date >= startDate
    })
    return (
        <>
            <div className="grid grid-cols-12 gap-4 items-stretch">
                <Link href={route('admin.product-category.index')} className="col-span-6 lg:col-span-3 flex">
                    <Card className="text-primary w-full hover:shadow-none">
                        <CardContent className="py-2 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h5 className="font-semibold mb-3">
                                        Product Categories
                                    </h5>
                                    <div className="text-3xl font-bold">
                                        {productCategoryCount}
                                    </div>
                                </div>
                                <ChartBar className="h-10 w-10" />
                            </div>
                        </CardContent>
                    </Card>
                </Link>
                <Link href={route('admin.product.index')} className="col-span-6 lg:col-span-3 flex">
                    <Card className="text-primary w-full hover:shadow-none">
                        <CardContent className="py-2 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h5 className="font-semibold mb-3">
                                        Products
                                    </h5>
                                    <div className="text-3xl font-bold">
                                        {productCount}
                                    </div>
                                </div>
                                <Package className="h-10 w-10" />
                            </div>
                        </CardContent>
                    </Card>
                </Link>
                <Link href={route('admin.post-category.index')} className="col-span-6 lg:col-span-3 flex">
                    <Card className="text-primary w-full hover:shadow-none">
                        <CardContent className="py-2 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h5 className="font-semibold mb-3">
                                        Post Categories
                                    </h5>
                                    <div className="text-3xl font-bold">
                                        {postCategoryCount}
                                    </div>
                                </div>
                                <ChartColumn className="h-10 w-10" />
                            </div>
                        </CardContent>
                    </Card>
                </Link>
                <Link href={route('admin.post.index')} className="col-span-6 lg:col-span-3 flex">
                    <Card className="text-primary w-full hover:shadow-none">
                        <CardContent className="py-2 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h5 className="font-semibold mb-3">
                                        Posts
                                    </h5>
                                    <div className="text-3xl font-bold">
                                        {postCount}
                                    </div>
                                </div>
                                <Rss className="h-10 w-10" />
                            </div>
                        </CardContent>
                    </Card>
                </Link>
                <Link href={route('admin.mail-message.index')} className="col-span-6 lg:col-span-3 flex">
                    <Card className="text-primary w-full hover:shadow-none">
                        <CardContent className="py-2 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h5 className="font-semibold mb-3">
                                        Messages
                                    </h5>
                                    <div className="text-3xl font-bold">
                                        {messageCount}
                                    </div>
                                </div>
                                <MessageCircle className="h-10 w-10" />
                            </div>
                        </CardContent>
                    </Card>
                </Link>
                <Link href={route('admin.visitor.index')} className="col-span-6 lg:col-span-3 flex">
                    <Card className="text-primary w-full hover:shadow-none">
                        <CardContent className="py-2 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h5 className="font-semibold mb-3">
                                        Visitors
                                    </h5>
                                    <div className="text-3xl font-bold">
                                        {visitorCount}
                                    </div>
                                </div>
                                <Users className="h-10 w-10" />
                            </div>
                        </CardContent>
                    </Card>
                </Link>
                <div className="col-span-12">
                    <Card>
                        <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row px-4">
                            <div className="grid flex-1 gap-1 text-center sm:text-left">
                                <CardTitle>
                                    <h5 className="text-primary font-semibold mb-3">
                                        Visitors
                                    </h5></CardTitle>
                                <CardDescription>
                                    Showing total visitors
                                </CardDescription>
                            </div>
                            <Select value={timeRange} onValueChange={setTimeRange}>
                                <SelectTrigger
                                    className="w-[160px] rounded-lg sm:ml-auto"
                                    aria-label="Select a value"
                                >
                                    <SelectValue placeholder="Last 3 months" />
                                </SelectTrigger>
                                <SelectContent className="rounded-xl">
                                    <SelectItem value="90d" className="rounded-lg">
                                        Last 3 months
                                    </SelectItem>
                                    <SelectItem value="30d" className="rounded-lg">
                                        Last 30 days
                                    </SelectItem>
                                    <SelectItem value="7d" className="rounded-lg">
                                        Last 7 days
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </CardHeader>
                        <CardContent className="px-0 pt-4 sm:px-0 sm:pt-6">
                            <ChartContainer
                                config={chartConfig}
                                className="aspect-auto px-0 h-[300px] w-full"
                            >
                                <AreaChart data={filteredData}>
                                    <defs>
                                        <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                                            <stop
                                                offset="5%"
                                                stopColor="#263e66"
                                                stopOpacity={0.8}
                                            />
                                            <stop
                                                offset="95%"
                                                stopColor="#263e66"
                                                stopOpacity={0.1}
                                            />
                                        </linearGradient>
                                        <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                                            <stop
                                                offset="5%"
                                                stopColor="#26776a"
                                                stopOpacity={0.8}
                                            />
                                            <stop
                                                offset="95%"
                                                stopColor="#26776a"
                                                stopOpacity={0.1}
                                            />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid vertical={false} />
                                    <XAxis
                                        dataKey="date"
                                        tickLine={false}
                                        axisLine={false}
                                        tickMargin={8}
                                        minTickGap={32}
                                        tickFormatter={(value) => {
                                            const date = new Date(value)
                                            return date.toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "numeric",
                                            })
                                        }}
                                    />
                                    <ChartTooltip
                                        cursor={false}
                                        content={
                                            <ChartTooltipContent
                                                labelFormatter={(value) => {
                                                    return new Date(value).toLocaleDateString("en-US", {
                                                        month: "short",
                                                        day: "numeric",
                                                    })
                                                }}
                                                indicator="dot"
                                            />
                                        }
                                    />
                                    <Area
                                        dataKey="mobile"
                                        type="natural"
                                        fill="url(#fillMobile)"
                                        stroke="#26776a"
                                        stackId="a"
                                    />
                                    <Area
                                        dataKey="desktop"
                                        type="natural"
                                        fill="url(#fillDesktop)"
                                        stroke="#263e66"
                                        stackId="a"
                                    />
                                    <ChartLegend content={<ChartLegendContent />} />
                                </AreaChart>
                            </ChartContainer>
                        </CardContent>
                    </Card>
                </div>
            </div>

        </>
    );
}

Dashboard.layout = (page) => <DashboardLayout children={page} />;
