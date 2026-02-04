import { NavLink } from "react-router-dom";
import {
    LayoutDashboard,
    Users,
    Briefcase,
    Calendar,
    MessageSquare,
    LogOut,
    Building2,
    Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Directory', href: '/directory', icon: Users },
    { name: 'Jobs', href: '/jobs', icon: Briefcase },
    { name: 'Events', href: '/events', icon: Calendar },
    { name: 'Messages', href: '/messages', icon: MessageSquare },
    { name: 'Groups', href: '/groups', icon: Building2 },
    { name: 'Settings', href: '/settings', icon: Settings },
];

const Sidebar = () => {
    return (
        <div className="flex flex-col h-full bg-white border-r border-gray-200 shadow-sm">
            <div className="flex items-center justify-center h-16 px-4 border-b border-gray-200">
                <div className="flex items-center gap-2 font-bold text-xl text-indigo-600">
                    <img src="/images/logo.png" alt="Logo" className="h-8 w-8 object-contain rounded-full bg-white" />
                    <span>Alumni</span>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto py-4">
                <nav className="space-y-1 px-2">
                    {navigation.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.href}
                            className={({ isActive }) =>
                                cn(
                                    isActive
                                        ? "bg-indigo-50 text-indigo-600"
                                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                    "group flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-colors"
                                )
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    <item.icon
                                        className={cn(
                                            isActive ? "text-indigo-600" : "text-gray-400 group-hover:text-gray-500",
                                            "mr-3 h-5 w-5 flex-shrink-0"
                                        )}
                                        aria-hidden="true"
                                    />
                                    {item.name}
                                </>
                            )}
                        </NavLink>
                    ))}
                </nav>
            </div>

            <div className="p-4 border-t border-gray-200">
                <NavLink to="/auth/login" className="flex items-center w-full px-3 py-2 text-sm font-medium text-red-600 rounded-md hover:bg-red-50 transition-colors">
                    <LogOut className="mr-3 h-5 w-5" />
                    Sign Out
                </NavLink>
            </div>
        </div>
    );
};

export default Sidebar;
