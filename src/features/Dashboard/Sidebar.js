import { Home, User, Settings, LogOut, Bot, Menu, X  } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from "react-router-dom";
import Profile from './Profile';
import CreateJob from '../Jobs/CreateJob';
import ManageJob from '../Jobs/ManageJob';
import { useState } from 'react';

export default function Sidebar() {

  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const { page } = useParams();
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

  const renderContent = () => {
    switch (page) {
      case 'profile':
        return <Profile/>;
      case 'create-job':
        return <CreateJob/>;
      case 'manage-job':
        return <ManageJob/>
      default:
        return <Profile/>;
    }
  }

  return (
    <div className="flex">
      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-gray-800 text-white flex items-center justify-between p-4 z-50">
        <h1 className="text-xl font-bold">Admin Panel</h1>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white overflow-y-auto transform transition-transform duration-300 z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0`}
      >
        <div className="hidden md:block p-4">
          <h1 className="text-2xl font-bold mb-10">Admin Panel</h1>
        </div>
        <nav className="flex flex-col gap-4 p-4">
          <Link to="/dashboard/dashboard" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded">
            <Home size={20} /> Dashboard
          </Link>
          <Link to="/dashboard/profile" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded">
            <User size={20} /> Profile
          </Link>
          <Link to="/dashboard/create-job" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded">
            <Bot size={20} /> Create Job
          </Link>
          <Link to="/dashboard/manage-job" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded">
            <Bot size={20} /> Manage Job
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

      {/* Content Area */}
      <div className="flex-1 bg-gray-100 min-h-screen pt-16 md:pt-0 md:pl-64">
        {renderContent()}
      </div>
    </div>
  );
}
