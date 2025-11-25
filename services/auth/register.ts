/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';
import { serverFetch } from "@/lib/server-fetch";
import { zodValidators } from "@/lib/zodValidators";
import { registerValidateZodSchema } from "@/zod/auth.validation";
import { redirect } from "next/navigation";

export const registerUser = async (_currentState: any, formData: any): Promise<any> => {
    try {
        const payload = {
            name: formData.get('firstName'),
            address: formData.get('lastName'),
            email: formData.get('email'),
            password: formData.get("password"),
        };
        const validationResult = zodValidators(payload, registerValidateZodSchema);
        if (validationResult.success === false) {
            return validationResult;
        }

        const validatedPayload = validationResult.data as Record<string, unknown>;


        const res = await serverFetch.post(`/auth/registe`, {
            body: JSON.stringify(validatedPayload),
            headers: { 'Content-Type': 'application/json' }
        });

        const result = await res.json();

        if (result.success) {
            redirect('/login')
        }

        return result;

    } catch (error: any) {
        if (error?.digest?.startsWith("NEXT_REDIRECT")) {
            throw error;
        }
        console.log(error);
        return { error: "Registration failed!" }
    }
};