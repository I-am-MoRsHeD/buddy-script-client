import RegisterForm from '@/components/modules/auth/RegisterForm';
import Image from 'next/image';

const RegisterPage = () => {
    return (
        <div className="min-h-screen flex flex-row">
            <div className="relative hidden md:flex items-center justify-center md:w-1/2 lg:w-2/3">
                <Image
                    src="/images/registration.png"
                    alt="Registration Illustration"
                    fill
                    className="object-contain"
                />
            </div>


            <div className="flex items-center justify-center w-full p-2 lg:p-6 sm:w-[70%] md:w-1/2 lg:w-1/3 mx-auto">
                <RegisterForm />
            </div>
        </div>
    );
};

export default RegisterPage;