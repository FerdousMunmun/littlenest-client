"use client";

import { Card, Separator } from "@heroui/react";
import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";

import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useState } from "react";

const LoginPage = () => {

    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // const formData = new FormData(e.currentTarget);
        // const user = Object.fromEntries(formData.entries()) as {
        //     email: string;
        //     password: string;
        // };

        // const { data, error } = await authClient.signIn.email({
        //     email: user.email,
        //     password: user.password,
        // });

        const { data, error } = await authClient.signIn.email({
            email,
            password,
        });


        if (error) {
            toast.error("Invalid email or password");
            return;
        }

        if (data) {
            toast.success("Login Successful!");
            router.push("/");
        }
    };
    const handleDemoLogin = async () => {
  const demoEmail = "demo@gmail.com";
  const demoPassword = "Demo12345678";

  setEmail(demoEmail);
  setPassword(demoPassword);

  const { data, error } = await authClient.signIn.email({
    email: demoEmail,
    password: demoPassword,
  });

  if (error) {
    toast.error("Demo Login Failed");
    return;
  }

  toast.success("Welcome to LittleNest!");
  router.push("/");
};
    const handleGoogleSignin = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/"
        });
    };

    return (
        <div className="max-w-7xl mx-auto">
            <div className="text-center my-3">
                <h1 className="text-2xl font-bold">Login</h1>
                <p>Login to continue exploring trusted child care centers.</p>
            </div>
            <Card className="border rounded-none">
                <Form onSubmit={onSubmit} className="flex w-96 flex-col gap-4">
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="john@example.com"
                        />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                        />
                        <Description>
                            Must be at least 8 characters with 1 uppercase and 1 number
                        </Description>
                        <FieldError />
                    </TextField>
                    <div className="flex justify-center gap-2">
                        <Button className={"rounded-none w-full bg-gray-600"} type="submit">
                            Login
                        </Button>
                    </div>

                    <div className="mt-3 w-full">
                        <Button
                            onClick={handleDemoLogin}
                            className="w-full rounded-none bg-blue-600 text-white"
                        >
                            🔑 Demo Login
                        </Button>
                    </div>
                </Form>

                <div className="flex justify-center items-center gap-3">
                    <Separator />
                    <div className="whitespace-nowrap"> Or sign up with </div>
                    <Separator />
                </div>
                <div>
                    <Button
                        onClick={handleGoogleSignin}
                        variant="outline"
                        className={"w-full rounded-none"}
                    >
                        <FcGoogle /> Sign in with Google
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default LoginPage;