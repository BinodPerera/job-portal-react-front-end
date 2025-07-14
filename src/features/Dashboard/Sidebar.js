import { Home, User, Settings, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        // Redirect to login or home page
        navigate("/login");
      } else {
        console.error("Logout failed.");
      }
    } catch (err) {
      console.error("Error during logout:", err);
    }
  };

  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-10">User Panel</h1>
      <nav className="flex flex-col gap-4">
        <Link to="/dashboard/dashboard" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded">
          <Home size={20} /> Dashboard
        </Link>
        <Link to="/dashboard/profile" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded">
          <User size={20} /> Profile
        </Link>
        <Link to="/dashboard/settings" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded">
          <Settings size={20} /> Settings
        </Link>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded text-left"
        >
          <LogOut size={20} /> Log Out
        </button>
      </nav>
    </div>
  );
}
