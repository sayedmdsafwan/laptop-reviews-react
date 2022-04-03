import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="sticky top-0">
            <nav className="flex bg-gray-200 justify-center">
                <Link className=" px-4 py-3 hover:bg-white duration-200" to="/">
                    Home
                </Link>
                <Link
                    className=" px-4 py-3 hover:bg-white duration-200"
                    to="/reviews"
                >
                    Reviews
                </Link>
                <Link
                    className=" px-4 py-3 hover:bg-white duration-200"
                    to="/dashboard"
                >
                    Dashboard
                </Link>
                <Link
                    className=" px-4 py-3 hover:bg-white duration-200"
                    to="/blogs"
                >
                    Blogs
                </Link>
                <Link
                    className=" px-4 py-3 hover:bg-white duration-200"
                    to="/about"
                >
                    About
                </Link>
            </nav>
        </div>
    );
};

export default Header;
