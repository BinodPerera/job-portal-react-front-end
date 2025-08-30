import DashboardCard from "./DashboardCard";
import { Users, Activity, DollarSign } from "lucide-react";
import { userProfile, getUserCount } from "../../services/UserService";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function Profile() {
  const [user, setUser] = useState([]);
  const [userCount, setUserCount] = useState(0);

  useEffect(()=>{
    const getUser = async (e) => {
      try{
        const res = await userProfile();
        if(res){
          setUser(res);
        }
      }
      catch(error){
        console.log("Error when send rq to find user details!");
      }
    }
    const getCount = async() => {
      try{
        const res = await getUserCount();
        setUserCount(res);
      }catch(error){
        console.log("Error fetching user count!");
      }
    }
    getCount();
    getUser();
  }, []);

  return (
    <>
      <Navbar/>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard title="Users" value={userCount} icon={<Users />} />
        <DashboardCard title="Active Jobs" value="87" icon={<Activity />} />
        <DashboardCard title="Revenue" value="$4,230" icon={<DollarSign />} />
        
      </div>
      <div className="w-full px-6">
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white h-100 rounded-xl shadow-lg p-5 flex flex-col">
            <div className="flex flex-row">
              <img
                src={"http://localhost:8080/uploads/"+user.image}
                alt="User"
                className="w-15 h-15 rounded-full"
              />
              <div className="px-5 my-auto justify-items-start">
                <h2 className="text-gray-800 text-md font-bold">Binod Perera</h2>
                <p className="text-purple-400 font-bold text-xs">{user.role}</p>
              </div>
            </div>
            <hr className="my-5 border-gray-300"></hr>
            <div className="w-full h-full bg-green-100">
              <p>Name</p>
              <p>Address</p>
            </div>
            
          </div>

          <div className="bg-white h-100 rounded-xl text-black-500 shadow-lg p-5">
            <h1 className="text-lg font-bold text-gray-800">Recently Applied</h1>
            <div className="flex flex-col gap-2 py-5">
              <div className="bg-gray-100 h-15 w-full p-2 rounded-lg flex flex-row items-center">
                <img src="https://i.pravatar.cc/40" alt="User" className="w-10 h-10 rounded-md" />
                <div className="justify-items-start pl-3">
                  <h2 className="text-md text-purple-900 font-bold">Senior Software Engineer</h2>
                  <p className="text-xs text-gray-500">TeamDynamo Solutions</p>
                </div>
              </div>

              <p className="text-md font-bold my-auto text-white bg-purple-600 hover:bg-purple-500 cursor-pointer p-1 rounded-lg">See All</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
