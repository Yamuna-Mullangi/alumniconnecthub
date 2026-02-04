import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PublicNavbar = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";

    // Use transparent background on Home (if we ever use this layout on Home), solid on others
    // Actually, since we are only using this for sub-pages, we'll implement the "Solid" style primarily.
    // But I'll keep the logic flexible.

    const navLinks = [
        { name: "About", path: "/about" },
        { name: "Legacy Hall", path: "/legacy-hall" },
        { name: "Hall of Fame", path: "/hall-of-fame" },
        { name: "Campus Location", path: "/campus-location" },
    ];

    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
            "bg-white/95 backdrop-blur-md border-b border-gray-100 dark:bg-gray-900/95 dark:border-gray-800"
        )}>
            <div className="flex items-center justify-between px-6 md:px-12 py-3">
                {/* Logo Section */}
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-indigo-600/10 flex items-center justify-center p-1.5 overflow-hidden group-hover:scale-105 transition-transform">
                        <img src="/images/logo.png" alt="Alumni Connect Logo" className="w-full h-full object-contain rounded-full bg-white" />
                    </div>
                    <div>
                        <h1 className="text-lg font-bold text-foreground font-serif leading-tight">Alumni Connect</h1>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Vignan's Lara</p>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                location.pathname === link.path ? "text-primary" : "text-muted-foreground"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                    <Link to="/auth/login">
                        <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
                            Login
                        </Button>
                    </Link>
                    <Link to="/auth/register">
                        <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20">
                            Register
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default PublicNavbar;
