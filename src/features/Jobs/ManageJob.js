import { Search } from "lucide-react";

export default function ManageJob(){
    return(
        <div className="p-10 bg-white flex flex-col gap-5">
            <div className="text-left text-lg font-bold">
                <h1 className="p-2">Manage Jobs</h1>
            </div>
            <div className="flex flex-row gap-3 bg-gray-400 p-2 rounded-full items-center">
                <input name="search" type="text" placeholder="Let's search Jobs. Enter Job title" className="bg-white w-full rounded-full p-2" />
                <button className="p-2 bg-gray-200 rounded-full flex flex-row gap-2 items-center font-bold cursor-pointer hover:shadow-lg">
                    <Search size={20} />Search
                </button>
            </div>
            <div className="flex flex-col gap-5">

                <div className="bg-gray-100 p-5 w-full text-left rounded-lg flex flex-col gap-5">
                    <div className="flex flex-row gap-5 items-center">
                        <img src="/img/companies/teamdynamo.png" alt="logo" className="h-15 w-15 bg-gray-300 rounded-full object-cover" />
                        <div className="flex flex-col gap-1">
                            <h3 className="font-semibold">Full-Stack Developer</h3>
                            <p className="font-thin">TeamDynamo Solutions - IT Company</p>
                        </div>
                    </div>
                    <p>description description description description description description description description description description description description description description description description description description description description description description description description description </p>
                    <div className="flex flex-row gap-2 p-1">
                        <button className="p-2 bg-blue-500 w-30 text-white rounded-3xl">Apply Now</button>
                        <button className="p-2 bg-gray-500 w-30 text-white rounded-3xl">Edit</button>
                        <button className="p-2 bg-red-500 w-30 text-white rounded-3xl">Delete</button>
                    </div>
                </div>

                <div className="bg-gray-100 p-5 w-full text-left rounded-lg flex flex-col gap-5">
                    <div className="flex flex-row gap-5 items-center">
                        <img src="/img/companies/teamdynamo.png" alt="logo" className="h-15 w-15 bg-gray-300 rounded-full object-cover" />
                        <div className="flex flex-col gap-1">
                            <h3 className="font-semibold">Full-Stack Developer</h3>
                            <p className="font-thin">TeamDynamo Solutions - IT Company</p>
                        </div>
                    </div>
                    <p>description description description description description description description description description description description description description description description description description description description description description description description description description </p>
                    <div className="flex flex-row gap-2 p-1">
                        <button className="p-2 bg-blue-500 w-30 text-white rounded-3xl">Apply Now</button>
                        <button className="p-2 bg-gray-500 w-30 text-white rounded-3xl">Edit</button>
                        <button className="p-2 bg-red-500 w-30 text-white rounded-3xl">Delete</button>
                    </div>
                </div>

                <div className="bg-gray-100 p-5 w-full text-left rounded-lg flex flex-col gap-5">
                    <div className="flex flex-row gap-5 items-center">
                        <img src="/img/companies/teamdynamo.png" alt="logo" className="h-15 w-15 bg-gray-300 rounded-full object-cover" />
                        <div className="flex flex-col gap-1">
                            <h3 className="font-semibold">Full-Stack Developer</h3>
                            <p className="font-thin">TeamDynamo Solutions - IT Company</p>
                        </div>
                    </div>
                    <p>description description description description description description description description description description description description description description description description description description description description description description description description description </p>
                    <div className="flex flex-row gap-2 p-1">
                        <button className="p-2 bg-blue-500 w-30 text-white rounded-3xl">Apply Now</button>
                        <button className="p-2 bg-gray-500 w-30 text-white rounded-3xl">Edit</button>
                        <button className="p-2 bg-red-500 w-30 text-white rounded-3xl">Delete</button>
                    </div>
                </div>
                
            </div>
            <div className="flex flex-row gap-5 items-center justify-center">
                <button>Previous</button>
                <button>Next</button>
            </div>
        </div>
    );
}