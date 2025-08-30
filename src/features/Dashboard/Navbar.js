import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { userProfile } from "../../services/UserService";

export default function Navbar() {

  const { page } = useParams();
  const [user, setUser] = useState([]);
  
  const getPageName = () => {
    switch(page){
      case 'profile':
        return 'User Profile';
      case 'settings':
        return 'Settings';
      case 'create-job':
        return 'Create Job';
      case 'manage-job':
        return 'Manage Jobs';
      default:
        return 'Dashboard';
    }
  }

  useEffect(()=>{
    const userDetails = async(e) => {
      try{
        const res = await userProfile();
        if(res){
          setUser(res);
        }
      }catch(error){
        console.log(error);
      }
    }
    userDetails();
  },[]);


  const img = "http://localhost:8080/uploads/"+user.image;
  return (
    <div className="h-25 bg-white shadow-md flex items-center justify-between px-6 mx-6 my-2 rounded-xl backdrop-blur-lg
            border border-white/20
            shadow-lg">
      <h2 className="text-md font-bold">{getPageName()}</h2>
      <div className="flex items-center gap-4">
        <span className="text-gray-600">{user.username}</span>
        <img
          src={img}
          alt="User"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
}
