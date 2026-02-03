import { Outlet } from "react-router-dom";
import { GraduationCap } from "lucide-react";

const AuthLayout = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center">
                    <div className="h-12 w-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
                        <GraduationCap size={32} />
                    </div>
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Alumni Connect
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Your professional alumni network
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-100">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
