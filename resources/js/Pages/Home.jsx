import React from "react";
import SidebarLayout from "./Sidebar/SidebarLayout";

const Home = () => {
    return (
        <SidebarLayout>
            <h1 className="text-4xl">Home</h1>
            <p className="mt-4">This is the home page content.</p>
        </SidebarLayout>
    );
};

export default Home;
