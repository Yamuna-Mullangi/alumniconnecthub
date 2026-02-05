import { Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Layouts
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import PublicLayout from "./layouts/PublicLayout";

// Auth Pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// App Pages
import Dashboard from "./pages/dashboard/Dashboard";
import Directory from "./pages/directory/Directory";
import Profile from "./pages/profile/Profile";
import Jobs from "./pages/jobs/Jobs";
import Events from "./pages/events/Events";
import Messages from "./pages/messages/Messages";
import Groups from "./pages/groups/Groups";
import Settings from "./pages/settings/Settings";
import Notifications from "./pages/notifications/Notifications";
import About from "./pages/public/About";
import LegacyHall from "./pages/public/LegacyHall";
import HallOfFame from "./pages/public/HallOfFame";
import CampusLocation from "./pages/public/CampusLocation";

const App = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Index />} />

      <Route element={<PublicLayout />}>
        <Route path="/about" element={<About />} />
        <Route path="/legacy-hall" element={<LegacyHall />} />
        <Route path="/hall-of-fame" element={<HallOfFame />} />
        <Route path="/campus-location" element={<CampusLocation />} />
      </Route>

      {/* Auth Routes */}
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route index element={<Navigate to="/auth/login" replace />} />
      </Route>

      {/* Protected App Routes */}
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifications" element={<Notifications />} />
      </Route>

      {/* Catch-all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
