import { Outlet } from "react-router-dom";
import AuthenticatedNavbar from "@/components/layout/AuthenticatedNavbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <AuthenticatedNavbar />

      {/* Main Content Area */}
      <main className="pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto animate-fade-in">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
