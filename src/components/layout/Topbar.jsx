import { Bell, Search, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Topbar = () => {
    return (
        <header className="bg-white border-b border-gray-200 h-16 px-4 flex items-center justify-between sticky top-0 z-10">
            <div className="flex items-center md:hidden">
                <button className="text-gray-500 hover:text-gray-700">
                    <Menu className="h-6 w-6" />
                </button>
            </div>

            <div className="hidden md:flex flex-1 max-w-lg ml-4">
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm transition-colors"
                        placeholder="Search alumni, jobs, events..."
                    />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <Link to="/notifications" className="relative p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <Bell className="h-6 w-6" />
                    <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
                </Link>

                <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold border-2 border-indigo-200">
                    JD
                </div>
            </div>
        </header>
    );
};

export default Topbar;
