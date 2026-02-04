import { Outlet } from "react-router-dom";


const AuthLayout = () => {
    return (
        <div className="min-h-screen relative flex items-center justify-center p-4">
            {/* Background Image */}
            <div className="fixed inset-0 z-0">
                <img
                    className="h-full w-full object-cover"
                    src="/images/carousel1.jpg"
                    alt="Campus Background"
                />
                <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Content Card */}
            <div className="relative z-10 w-full max-w-md bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 animate-in fade-in zoom-in-95 duration-500">
                <div className="mb-8 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-indigo-600/10 text-indigo-600 mb-4 p-2 overflow-hidden">
                        <img src="/images/logo.png" alt="Logo" className="w-full h-full object-contain rounded-full bg-white" />
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-serif">
                        Alumni Connect
                    </h2>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Network. Engage. Reunite.
                    </p>
                </div>

                <Outlet />
            </div>
        </div>
    );
};

export default AuthLayout;
