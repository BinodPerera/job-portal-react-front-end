import { useState } from "react";

export default function Home(){

    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState({label: "Select Location", value: ""});

    const options = [
        {label: "Colombo", value: 1},
        {label: "Horana", value: 2},
        {label: "Kandy", value: 3}
    ];

    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
        console.log("Selected value:", option.value);
    }

    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 m-5 md:m-8 lg:m-10 md:-xl shadow-md flex items-center">
            <div className="px-3 py-10 md:px-4 md:py-20 lg:px-5 lg:py-30  gap-4">

                <h3
                    className="text-xl font-bold my-4"
                >Enter the Job you looking,</h3>

                <div className="flex w-full h-15 my-3 items-center bg-gray-100 rounded-lg md:rounded-xl px-5">
                    <img src="/img/icons/title-label.png" alt="label" className="h-5 w-5" />
                    <div className="w-1"></div>
                    <input 
                        type="text" 
                        placeholder="Job Title" 
                        className="outline-none w-full"
                    />
                </div>

                <div
                    className="relative inline-block w-full h-15 z-15 items-center text-left bg-gray-100 rounded-lg md:rounded-xl" onClick={()=>setIsOpen(!isOpen)}>
                        <div className="absolute top-4 left-4 flex gap-2">
                            <img src="/img/icons/location.png" alt="label" className="h-5 w-5" />
                            <button>
                                {selected.label}
                            </button>
                        </div>
                        
                        {isOpen && (
                            <div className="absolute mt-16 w-full">
                                {options.map((option)=>(
                                    <div 
                                        key={option.value} 
                                        onClick={()=>handleSelect(option)}
                                        className="h-10 md:h-15 w-full border-1 border-gray-100 rounded-lg md:rounded-xl bg-gray-300 flex items-center px-5"
                                    >
                                        {option.label}
                                    </div>
                                ))}
                            </div>
                        )}
                </div>

                <button 
                    type="submit"
                    className="h-15 w-30 bg-gray-900 my-3 rounded-lg md:rounded-xl text-white text-lg"
                >
                    Search
                </button>

            </div>
            <div className="flex p-5 gap-4 h-50 md:h-full bg-[url('/img/cover-image-banner.png')] bg-cover bg-center">
                
            </div>
        </div>
    );
}