import { Outlet } from "react-router-dom";


const AuthLayout = () => {
    return (
        <div className="min-h-screen relative flex items-center justify-center p-4">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/carousel1.jpg"
                    alt="Background"
                    className="w-full h-full object-cover opacity-40 blur-sm"
                />
                <div className="absolute inset-0 bg-background/60" />
            </div>

            {/* Content Card */}
            <div className="relative z-10 w-full max-w-md glass-card rounded-2xl p-8 animate-in fade-in zoom-in-95 duration-500 border-white/10 shadow-2xl">
                <div className="mb-8 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-4 p-2 overflow-hidden border border-white/10 shadow-[0_0_20px_rgba(123,51,126,0.5)]">
                        <img src="/images/logo.png" alt="Logo" className="w-full h-full object-contain rounded-full bg-white/90" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-white font-serif drop-shadow-md">
                        Alumni Connect
                    </h2>
                    <p className="mt-2 text-sm text-foreground/80">
                        Network. Engage. Reunite.
                    </p>
                </div>

                <Outlet />
            </div>
        </div>
    );
};

export default AuthLayout;
