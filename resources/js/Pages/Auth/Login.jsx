import ApplicationLogo from "@/Components/ApplicationLogo";
import InputError from "@/Components/InputError";
import { Button } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";
import { Checkbox } from "@/Components/ui/checkbox";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    console.log(errors);


    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <>
            <Head title="Log in" />
            <div className="flex flex-col gap-6">
                <Card className="overflow-hidden bg-white">
                    <CardContent className="grid p-0 md:grid-cols-2">
                        <form onSubmit={submit} className="p-6 md:p-8">
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col items-center text-center">
                                    <h1 className="text-2xl font-bold">
                                        Welcome back
                                    </h1>
                                    <p className="text-balance text-muted-foreground">
                                        Login to your Pikoras account
                                    </p>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <div>

                                        <Input
                                            className="bg-white"
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={data.email}
                                            autoComplete="username"
                                            isfocused={"true"}
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                        />
                                        <InputError message={errors.email} className="mt-1" />
                                    </div>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="password">Password</Label>
                                    <div>

                                        <Input
                                            className="bg-white"
                                            id="password"
                                            type="password"
                                            name="password"
                                            value={data.password}
                                            autoComplete="current-password"
                                            onChange={(e) =>
                                                setData("password", e.target.value)
                                            }
                                        />
                                        <InputError message={errors.password} className="mt-1" />
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox
                                            name="remember"
                                            checked={data.remember}
                                            onCheckedChange={(e) =>
                                                setData("remember", e)
                                            }
                                            id="terms"
                                        />
                                        <Label
                                            htmlFor="terms"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Remember me
                                        </Label>
                                    </div>
                                </div>
                                <Button type="submit" className="w-full">
                                    Login
                                </Button>
                            </div>
                        </form>
                        <div className="relative hidden bg-white border-s border-s-2 border-primary/10 md:block grid place-content-center">
                            <Link href={route("home")}>
                                <ApplicationLogo className="w-7/12 mx-auto" />
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}

Login.layout = (page) => <GuestLayout children={page} />;
