import React from "react";

interface FeedLayoutProps {
    children: React.ReactNode
};

const FeedLayout = ({ children }: FeedLayoutProps) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default FeedLayout;