'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { useActionState } from "react";
import { getInputFieldError } from "@/lib/getInputFieldError";
import Link from "next/link";
import { registerUser } from "@/services/auth/register";

const RegisterForm = () => {
    const [state, formAction, isPending] = useActionState(registerUser, null);

    return (
        <Card className="w-full lg:max-w-md shadow-xl rounded-2xl p-6">
            <div className="flex flex-col justify-center items-center">
                <Image src="/logo.svg" width={100} height={100} alt="logo" />
            </div>
            <CardHeader className="space-y-1 text-center">
                <CardTitle className="text-xs font-normal">Get Started Now</CardTitle>
                <CardTitle className="text-xl">Registration</CardTitle>
            </CardHeader>


            <CardContent className="space-y-4">
                <Button variant="outline" className="w-full gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 48 48"
                    >
                        <path
                            fill="#FFC107"
                            d="M43.6 20.5H42V20H24v8h11.3A11.9 11.9 0 0 1 24 36c-6.6 0-12-5.4-12-12S17.4 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 5.3 29.6 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21c0-1.2-.1-2.3-.4-3.5z"
                        />
                        <path
                            fill="#FF3D00"
                            d="m6.3 14.7 6.6 4.8A11.9 11.9 0 0 1 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 5.3 29.6 3 24 3 16.1 3 9.2 7.3 6.3 14.7z"
                        />
                        <path
                            fill="#4CAF50"
                            d="M24 45c5.5 0 10.5-2.1 14.3-5.7l-6.6-5.5A11.8 11.8 0 0 1 24 36c-4.8 0-9-2.8-10.9-6.8l-6.7 5C9.1 40.3 16 45 24 45z"
                        />
                        <path
                            fill="#1976D2"
                            d="M43.6 20.5H42V20H24v8h11.3A12 12 0 0 1 24 36v9c11 0 20-9 20-21 0-1.2-.1-2.3-.4-3.5z"
                        />
                    </svg>
                    Register with Google
                </Button>


                <div className="flex items-center gap-2 my-2">
                    <div className="h-0.5 flex-1 bg-muted" />
                    <span className="text-sm text-muted-foreground">Or</span>
                    <div className="h-0.5 flex-1 bg-muted" />
                </div>


                <form action={formAction}>
                    <FieldGroup>
                        <div className="grid grid-cols-1 gap-4">
                            {/* first name */}
                            <Field>
                                <FieldLabel htmlFor="firstName">
                                    First Name
                                </FieldLabel>
                                <Input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    placeholder="Evil"
                                />
                                <FieldDescription className="text-red-600">
                                    {getInputFieldError("firstName", state)}
                                </FieldDescription>
                            </Field>
                            {/* last name */}
                            <Field>
                                <FieldLabel htmlFor="lastName">
                                    Last Name
                                </FieldLabel>
                                <Input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    placeholder="Rabbit"
                                />
                                <FieldDescription className="text-red-600">
                                    {getInputFieldError("lastName", state)}
                                </FieldDescription>
                            </Field>

                            {/* email */}
                            <Field>
                                <FieldLabel htmlFor="email">
                                    Email
                                </FieldLabel>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="evil@gmail.com"
                                />
                                <FieldDescription className="text-red-600">
                                    {getInputFieldError("email", state)}
                                </FieldDescription>
                            </Field>
                            {/* Password */}
                            <Field>
                                <FieldLabel htmlFor="password">
                                    Password
                                </FieldLabel>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="********"
                                />
                                <FieldDescription className="text-red-600">
                                    {getInputFieldError("password", state)}
                                </FieldDescription>
                            </Field>
                            {/* Repeat password */}
                            <Field>
                                <FieldLabel htmlFor="repeat-password">
                                    Repeat Password
                                </FieldLabel>
                                <Input
                                    id="repeat-password"
                                    name="repeat-password"
                                    type="password"
                                    placeholder="********"
                                />
                                <FieldDescription className="text-red-600">
                                    {getInputFieldError("repeat-password", state)}
                                </FieldDescription>
                            </Field>
                            {/* terms */}
                            <Field>
                                <div className="flex items-center space-x-2 pt-2">
                                    <Checkbox id="terms" checked={true} />
                                    <FieldLabel htmlFor="terms">
                                        I agree to terms & conditions
                                    </FieldLabel>
                                </div>
                            </Field>

                        </div>
                        <FieldGroup>
                            <Field>
                                <Button type="submit" disabled={isPending}>
                                    {isPending ? "Creating account..." : "Create Account"}
                                </Button>
                                <FieldDescription className="text-center flex flex-row items-center justify-center gap-2">
                                    Already have an account? {" "}
                                    <Link href="/login" className="text-primary">
                                        Sign in
                                    </Link>
                                </FieldDescription>
                            </Field>
                        </FieldGroup>
                    </FieldGroup>
                </form>
            </CardContent>
        </Card>
    );
};

export default RegisterForm;