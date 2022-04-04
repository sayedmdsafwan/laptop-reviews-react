import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="sticky top-0">
            <nav className="flex bg-gray-200 justify-center">
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? "bg-white px-4 py-3"
                            : "bg-gray-200 px-4 py-3"
                    }
                    to="/"
                >
                    Home
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? "bg-white px-4 py-3"
                            : "bg-gray-200 px-4 py-3"
                    }
                    to="/reviews"
                >
                    Reviews
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? "bg-white px-4 py-3"
                            : "bg-gray-200 px-4 py-3"
                    }
                    to="/dashboard"
                >
                    Dashboard
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? "bg-white px-4 py-3"
                            : "bg-gray-200 px-4 py-3"
                    }
                    to="/blogs"
                >
                    Blogs
                </NavLink>
            </nav>
        </div>
    );
};

export default Header;
