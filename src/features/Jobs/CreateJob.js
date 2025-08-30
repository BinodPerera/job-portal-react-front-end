import { useEffect, useState } from "react";
import Navbar from "../Dashboard/Navbar";
import { CreateJobMethod } from "../../services/JobService";
import { getCompanies } from "../../services/CompanyService";

export default function CreateJob(){

    const [next, setNext] = useState(false);
    const [enterCompanyDetails, setEnterCompanyDetails] = useState(true);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState(null);

    const [companyId, setCompanyId] = useState('');
    const [companyTitle, setCompanyTitle] = useState('');
    const [companyDescription, setCompanyDescription] = useState('');
    const [companyLocation, setCompanyLocation] = useState('');
    const [companyLogo, setCompanyLogo] = useState(null);

    const [companies, setCompanies] = useState([]);
    useEffect(()=>{
        const fetchCompanies = async() => {
            try{
                const res = await getCompanies();
                if(res){
                    setCompanies(res);
                }
            } catch(error){
                console.log("Error Occured when send req to service!");
            }
        }
        fetchCompanies();
    },[]);

    const handleNext = () => {
        setNext(true);
    }

    const handleGoBack = () => {
        setNext(false);
        console.log("company id: " + companyId);
    }

    const changeCompany = async (e) => {
        setCompanyId(e.target.value ? Number(e.target.value) : '');
        if(e.target.value){
            setEnterCompanyDetails(false);
        }else{
            setEnterCompanyDetails(true);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("category", category);

        if (image) {
            formData.append("image", image); // actual File object
        }

        if (companyId) {
            formData.append("companyId", Number(companyId));
        } else {
            formData.append("companyTitle", companyTitle);
            formData.append("companyDescription", companyDescription);
            formData.append("companyLocation", companyLocation);
            if (companyLogo) {
                formData.append("companyLogo", companyLogo); // actual File object
            }
        }

        for (let [key, value] of formData.entries()) {
            console.log(key, value, typeof value);
        }


        try {
            const res = await CreateJobMethod(formData);
            console.log("✅ Job created:", res);
            alert("✅ Job created Successfully");
        } catch (error) {
            console.error("❌ Error:", error);
        }
    };



    return(
        <>
        <Navbar/>
        {!next && (
        <div className="flex flex-col p-10 justify-start bg-white m-6 rounded-xl shadow-md">
            <div className="mb-2"><h1 className="text-lg text-left font-bold">Please fill your Job Details</h1></div>
            <div className="text-left my-2">
                <input type="text" className="p-2 w-full rounded-lg bg-gray-100" placeholder="Job Title" 
                    name="title"
                    onChange={(e)=>setTitle(e.target.value)}
                    value={title}
                />
            </div>
            <div className="text-left my-2">
                <textarea 
                    className="p-2 w-full rounded-lg bg-gray-100"
                    placeholder="Job Description"
                    rows={5}
                    name="description"
                    onChange={(e)=>setDescription(e.target.value)}
                    value={description}
                ></textarea>
            </div>
            <div className="text-left my-2">
                <label>Job insdustre</label>
                <select className="w-full h-10 bg-gray-100 p-2 rounded-lg" 
                    name="job_category"
                    value={category}
                    onChange={(e)=>setCategory(e.target.value)}
                >
                    <option>select insdustre</option>
                    <option value="mad">MAD</option>
                    <option value="se">SE</option>
                </select>
            </div>
            <div className="text-left my-2">
                <label>Job Image</label>
                <input type="file" name="job_image" className="w-full p-2 rounded-lg bg-gray-100" 
                    onChange={(e)=>setImage(e.target.files[0])}
                />
            </div>
            <div>
                <button onClick={handleNext} className="h-10 w-50 bg-gray-500 text-white font-bold rounded-lg my-5">Next</button>
            </div>
        </div>
        )}

        {next && (
        <div className="flex flex-col p-10 justify-start bg-white m-6 rounded-xl shadow-md">
            <div className="mb-2"><h1 className="text-lg text-left font-bold">Company Details Area</h1></div>

            <div className="text-left my-2">
                <select className="w-full h-10 bg-gray-100 p-2 rounded-lg" 
                    name="job_category"
                    onChange={(e)=>changeCompany(e)}
                    // onChange={(e)=>setCompanyId(e.target.value ? Number(e.target.value) : '')}
                    value={companyId}
                >
                    <option value="">select company</option>
                    {companies.map((company)=>(
                        <option key={company.id} value={company.id}>{company.title}</option>
                    ))}
                </select>
            </div>

        {enterCompanyDetails && (
            <>
            <div className="flex items-center">
                <hr className="flex-grow border-t border-gray-300"/>
                <span className="px-3 text-gray-500 py-5 text-md">Please fill this data</span>
                <hr className="flex-grow border-t border-gray-300"/>
            </div>
        
                <div className="text-left my-2">
                    <input type="text" className="p-2 w-full rounded-lg bg-gray-100" placeholder="Company Name" 
                        onChange={(e)=>setCompanyTitle(e.target.value)}
                        value={companyTitle}
                    />
                </div>
                <div className="text-left my-2">
                    <textarea 
                        className="p-2 w-full rounded-lg bg-gray-100"
                        placeholder="Company Description"
                        rows={5}
                        onChange={(e)=>setCompanyDescription(e.target.value)}
                        value={companyDescription}
                    ></textarea>
                </div>
                <div className="text-left my-2">
                    <input type="text" className="p-2 w-full rounded-lg bg-gray-100" placeholder="Location" 
                        onChange={(e)=>setCompanyLocation(e.target.value)}
                        value={companyLocation}
                    />
                </div>
                <div className="text-left my-2">
                    <label className="text-sm">Company Logo:</label>
                    <input type="file" name="job_image" className="w-full p-2 rounded-lg bg-gray-100"
                        onChange={(e)=>setCompanyLogo(e.target.files[0])} 
                    />
                </div>
            </>
        )}
                <div className="flex flex-col md:flex-row space-between gap-2 my-2">
                    <button onClick={handleGoBack} className="h-10 w-50 border-1 text-black font-bold rounded-lg">Go Back</button>
                    <button type="submit" onClick={handleSubmit} className="h-10 w-50 bg-gray-500 text-white font-bold rounded-lg">Submit</button>
                </div>
        </div>
        )}
        </>
    );
}