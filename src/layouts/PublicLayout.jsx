import { Outlet } from "react-router-dom";
import PublicNavbar from "@/components/layout/PublicNavbar";
import Footer from "@/components/landing/Footer";

const PublicLayout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-background font-sans">
            <PublicNavbar />

            {/* 
        Add padding-top to account for the fixed navbar.
        Navbar is roughly h-16/h-20. 
        We use pt-20 to ensure content doesn't get hidden.
      */}
            <main className="flex-1 pt-20 animate-fade-in">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default PublicLayout;
