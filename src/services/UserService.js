const API_BASE_URL = `http://localhost:8080/api/user`;

export const userProfile = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/getprofile`, {
      method: 'GET',
      credentials: 'include'
    });

    if(!res.ok){
      throw new Error("User searching error!");
    }
    return await res.json();
  }
  catch(error){
    console.error("Error send rq to get User Details!");
    throw error;
  }
}

export const getUserCount = async() => {
    try{
        const res = await fetch(
            `${API_BASE_URL}/usercount`, {
                method: 'GET',
                credentials: 'include'
            }
        );
        if(!res.ok){
            throw new Error("Warning! Unable to fetch user count");
        }
        return await res.json();
    }catch(error){
        throw error;
    }
}