import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    Briefcase,
    Calendar,
    Users,
    MessageSquare,
    Bell,
    Search,
    LogOut,
    Menu,
    X
} from "lucide-react";
import { useState } from "react";

const AuthenticatedNavbar = () => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
        { name: 'Jobs', path: '/jobs', icon: Briefcase },
        { name: 'Events', path: '/events', icon: Calendar },
        { name: 'Directory', path: '/directory', icon: Users },
        { name: 'Messages', path: '/messages', icon: MessageSquare },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10 shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center gap-3">
                        <Link to="/dashboard" className="flex items-center gap-2 group">
                            <div className="h-10 w-10 rounded-full glass flex items-center justify-center p-1.5 overflow-hidden group-hover:scale-105 transition-transform border border-white/20 shadow-md">
                                <img src="/images/logo.png" alt="Alumni Connect" className="w-full h-full object-contain rounded-full bg-white/90" />
                            </div>
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400 hidden md:block tracking-tight font-serif">
                                Alumni Connect
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1 mx-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={cn(
                                    "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                                    isActive(link.path)
                                        ? "bg-primary/10 text-primary font-semibold shadow-[0_0_10px_rgba(123,51,126,0.2)]"
                                        : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                                )}
                            >
                                <link.icon className={cn("w-4 h-4", isActive(link.path) ? "fill-current" : "")} />
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Right Section: Search, Notifications, Profile */}
                    <div className="hidden md:flex items-center gap-4">
                        {/* Search Input (Collapsed) */}
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-4 w-4 text-muted-foreground group-focus-within:text-primary" />
                            </div>
                            <input
                                type="text"
                                className="block w-40 lg:w-64 pl-10 pr-3 py-1.5 border border-white/10 rounded-full text-sm bg-white/5 focus:bg-white/10 focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-foreground placeholder:text-muted-foreground/70"
                                placeholder="Search..."
                            />
                        </div>

                        {/* Notifications */}
                        <Link to="/notifications" className="relative p-2 rounded-full text-muted-foreground hover:bg-white/10 hover:text-primary transition-colors">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-background" />
                        </Link>

                        {/* User Profile - Enhanced */}
                        <div className="flex items-center gap-3 pl-4 border-l border-white/10 ml-2">
                            <Link to="/profile/1">
                                <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-primary to-purple-500 p-0.5 cursor-pointer hover:scale-105 transition-transform shadow-md">
                                    <div className="h-full w-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                                        <span className="font-bold text-primary text-sm">JD</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 rounded-lg text-muted-foreground hover:bg-white/10"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-white/10 bg-background/95 backdrop-blur-lg animate-in slide-in-from-top-2">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                    "flex items-center gap-3 px-3 py-3 rounded-lg text-base font-medium",
                                    isActive(link.path)
                                        ? "bg-primary/10 text-primary"
                                        : "text-muted-foreground hover:bg-white/5"
                                )}
                            >
                                <link.icon className="w-5 h-5" />
                                {link.name}
                            </Link>
                        ))}
                        <div className="my-2 border-t border-white/10" />
                        <Link
                            to="/notifications"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 px-3 py-3 rounded-lg text-base font-medium text-muted-foreground hover:bg-white/5"
                        >
                            <Bell className="w-5 h-5" />
                            Notifications
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default AuthenticatedNavbar;
