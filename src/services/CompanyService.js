const BASE_URL = `http://localhost:8080/api/company`;

export const getCompanies = async () => {
    try {
        const res = await fetch(`${BASE_URL}/`, {
            method: 'GET',
            credentials: 'include'
        });

        if(!res.ok){
            throw new Error("Attention! The response is not okay when fetch companies!");
        }
        
        return await res.json();
    } catch(error){
        console.log("Warning! Unable to fetch companies! error: "+error);
        throw error;
    }
}