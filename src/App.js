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
      <Router>
        <Routes>

          <Route path='*' element={<div><Header/>404 Page Not Found</div>} />
          <Route path="/" element={<><Header/><Home/></>} />
          <Route path="/login" element={<><Header/><Login/></>} />
          <Route path="/register" element={<><Header/><Register/></>} />
          <Route path="/endpoints" element={<><Header/><Endpoints/></>} />

          <Route path="/dashboard/*" element={
            <AuthChecker>
              <Sidebar />
            </AuthChecker>} 
          />

          <Route path="/dashboard/:page" element={
            <AuthChecker>
              <Sidebar />
            </AuthChecker>} 
          />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
