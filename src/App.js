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
import Dashboard from "./features/Dashboard/Dashboard";
import AuthChecker from "./components/AuthChecker";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path='*' element={<div>404 Page Not Found</div>} />
          <Route path="/" element={<HorizontalScrollList/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/endpoints" element={<Endpoints/>} />
          <Route path="/dashboard/:path" element={<AuthChecker><Dashboard/></AuthChecker>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
