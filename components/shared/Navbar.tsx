"use client";

import Image from "next/image";
import { ChevronDown, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getIconComponent } from "@/lib/icon-mapper";
import { cn } from "@/lib/utils";
import UserDropdown from "../user-dropdown";

const Navbar = () => {
    const pathname = usePathname();

    const navItems = [
        { href: "/feed", icon: "Home" },
        { href: "/add-friends", icon: "Users" },
        { href: "#", icon: "Bell" },
        { href: "/chats", icon: "MessageCircle" },
    ];

    return (
        <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur dark:bg-background/95">
            <nav className="xl:w-[90%] 3xl:w-[80%] mx-auto flex h-16 items-center justify-between px-4 w-full gap-10">

                <div className="flex-1 flex flex-row w-full justify-between">
                    <div className="flex items-center gap-2">
                        <Image src="/logo.svg" width={130} height={130} alt="BuddyScript" />
                    </div>

                    <div className="hidden md:flex w-[380px] bg-[#f5f5f5] rounded-full px-4 items-center h-11">
                        <Search className="mr-2 h-5 w-5 text-gray-400" />
                        <input
                            placeholder="input search text"
                            className="flex-1 bg-transparent outline-none text-gray-600"
                        />
                    </div>
                </div>


                <div className="flex items-center justify-between flex-1 w-full">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = getIconComponent(item.icon);

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 px-3 py-5 text-sm font-medium transition-all",
                                    isActive
                                        ? "text-primary border-b-2 border-primary"
                                        : "text-muted-foreground hover:border-b-2 hover:border-primary hover:text-primary"
                                )}
                            >
                                <Icon className="h-6 w-6" />
                            </Link>
                        );
                    })}


                    {/* User Profile */}
                    {/* <div className="flex items-center gap-2 cursor-pointer w-40">
                        <Avatar className="w-8 h-8">
                            <AvatarImage src="/images/user.jpg" />
                            <AvatarFallback>DF</AvatarFallback>
                        </Avatar>
                        <span className="font-medium text-gray-800">Dylan Field</span>
                        <ChevronDown className="w-4 h-4 text-gray-600" />
                    </div> */}
                    <UserDropdown />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
