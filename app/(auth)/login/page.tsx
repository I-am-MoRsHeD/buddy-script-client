import LoginForm from '@/components/modules/auth/LoginForm';
import Image from 'next/image';
import React from 'react';

const LoginPage = () => {
    return (
        <div className="min-h-screen flex flex-row">
            <div className="relative hidden md:flex items-center justify-center md:w-1/2 lg:w-2/3">
                <Image
                    src="/images/login.png"
                    alt="Login Illustration"
                    fill
                    className="object-contain"
                />
            </div>


            <div className="flex items-center justify-center w-full p-2 lg:p-6 sm:w-[70%] md:w-1/2 lg:w-1/3 mx-auto">
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginPage;