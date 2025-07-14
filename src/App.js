import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// css 
import './App.css';

// components 
import Header from './components/Header';

// pages
import Login from './features/Auth/Login';
import Register from './features/Auth/Register';
import HorizontalScrollList from './HorizontalScrollList';
import Endpoints from './features/Endpoint/Endpoints';
import AuthChecker from "./components/AuthChecker";

import Sidebar from "./features/Dashboard/Sidebar";
import Navbar from "./features/Dashboard/Navbar";
import Profile from "./features/Dashboard/Profile";
import Settings from "./features/Dashboard/Settings";
import Dashboard from "./features/Dashboard/Dashboard";
import Home from "./features/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>

          <Route path='*' element={<div>404 Page Not Found</div>} />
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/endpoints" element={<Endpoints/>} />

          <Route path="/dashboard/*" element={
            <AuthChecker>
              <div className="flex">
                <Sidebar />
                <div className="flex-1 bg-gray-100 min-h-screen">
                  <Navbar />
                  <Settings />
                </div>
              </div>
            </AuthChecker>} 
          />

          <Route path="/dashboard/dashboard" element={
            <AuthChecker>
              <div className="flex">
                <Sidebar />
                <div className="flex-1 bg-gray-100 min-h-screen">
                  <Navbar />
                  <Dashboard />
                </div>
              </div>
            </AuthChecker>} 
          />

          <Route path="/dashboard/profile" element={
            <AuthChecker>
              <div className="flex">
                <Sidebar />
                <div className="flex-1 bg-gray-100 min-h-screen">
                  <Navbar />
                  <Profile />
                </div>
              </div>
            </AuthChecker>} 
          />

          <Route path="/dashboard/settings" element={
            <AuthChecker>
              <div className="flex">
                <Sidebar />
                <div className="flex-1 bg-gray-100 min-h-screen">
                  <Navbar />
                  <Settings />
                </div>
              </div>
            </AuthChecker>} 
          />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
