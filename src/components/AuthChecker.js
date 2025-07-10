import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthChecker = ({children}) => {
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get("http://localhost:8080/api/auth/check", {
            withCredentials: true,
        })
        .then(()=>{
            navigate("/dashboard/profile");
        })
        .catch(()=>{
            navigate("/login");
        });
    }, [navigate]);

    return children;
}

export default AuthChecker;