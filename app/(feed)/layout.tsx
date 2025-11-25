import Navbar from "@/components/shared/Navbar";
import React from "react";

interface FeedLayoutProps {
    children: React.ReactNode
};

const FeedLayout = ({ children }: FeedLayoutProps) => {
    return (
        <div className="bg-muted/80 min-h-screen">
            <Navbar />
            {children}
        </div>
    );
};

export default FeedLayout;