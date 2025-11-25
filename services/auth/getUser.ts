/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { IUser } from "@/interface/user.interface";
import { serverFetch } from "@/lib/server-fetch";
import { getCookie } from "@/services/auth/tokenHandlers";
import jwt, { JwtPayload } from "jsonwebtoken";


export const getUserInfo = async (): Promise<IUser | null> => {
    try {
        const accessToken = await getCookie('accessToken');

        if (!accessToken) {
            return null;
        };

        const verifiedUser = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET as string) as JwtPayload;

        if (!verifiedUser) {
            return null;
        };

        const res = await serverFetch.get(`/auth/me`);
        const data = await res.json();

        return data;

    } catch (error: any) {
        console.log(error);
        throw new Error('Failed to get user info', { cause: error });
    }
};