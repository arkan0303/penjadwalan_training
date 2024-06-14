import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import { FaBars, FaHome, FaFileAlt, FaCogs, FaPhone } from "react-icons/fa";

const Sidebar = ({ onToggle }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
        onToggle(!isExpanded);
    };

    return (
        <div
            className={`h-screen ${
                isExpanded ? "w-64" : "w-14"
            } bg-gray-800 text-white fixed transition-width duration-300`}
        >
            <div className="p-4 text-2xl font-semibold flex items-center justify-between">
                <span className={`${isExpanded ? "block" : "hidden"}`}>
                    Navbar
                </span>
                <button onClick={toggleSidebar} className="focus:outline-none">
                    <FaBars />
                </button>
            </div>
            <nav className="mt-10">
                <ul>
                    <li className="px-4 py-2 hover:bg-gray-700 flex items-center">
                        <Link href="/">
                            <FaHome />
                        </Link>
                        {isExpanded && (
                            <Link href="/" className="ml-4">
                                Home
                            </Link>
                        )}
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-700 flex items-center">
                        <Link href="/training">
                            <FaFileAlt />
                        </Link>
                        {isExpanded && (
                            <Link href="/training" className="ml-4">
                                Post Training
                            </Link>
                        )}
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-700 flex items-center">
                        <Link href="/service">
                            <FaCogs />
                        </Link>
                        {isExpanded && (
                            <Link href="/service" className="ml-4">
                                Services
                            </Link>
                        )}
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-700 flex items-center">
                        <FaPhone />
                        {isExpanded && (
                            <Link href="/contact" className="ml-4">
                                Contact
                            </Link>
                        )}
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
