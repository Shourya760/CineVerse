import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet ,useNavigate } from "react-router-dom";

export default function Layout() {
    const navigate = useNavigate();

    // Simple logout handler (you can improve this later with auth context)
    const handleLogout = () => {
        localStorage.removeItem("user"); // example, clear user
        navigate("/"); // go back to login
    };
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <Header handleLogout={handleLogout} />

            {/* Page content */}
            <main>
                <Outlet /> {/* This is where nested pages will render */}
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
