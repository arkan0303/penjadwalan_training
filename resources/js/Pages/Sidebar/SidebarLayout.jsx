import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";

const SidebarLayout = ({ children }) => {
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

    const handleToggleSidebar = (isExpanded) => {
        setIsSidebarExpanded(isExpanded);
    };

    return (
        <div className="flex">
            <Sidebar onToggle={handleToggleSidebar} />
            <div
                className={`transition-all duration-300 ${
                    isSidebarExpanded ? "ml-64" : "ml-14"
                } p-4`}
            >
                {children}
            </div>
        </div>
    );
};

export default SidebarLayout;
