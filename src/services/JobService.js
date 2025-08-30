const API_BASE_URL = `http://localhost:8080/api/job`;

export const CreateJobMethod = async (formData) => {
  try {
    const res = await fetch(`${API_BASE_URL}/create`, {
      credentials: "include",
      method: "POST",
      body: formData,
    });

    const contentType = res.headers.get("content-type");

    if (contentType && contentType.includes("application/json")) {
      return await res.json();
    } else {
      // plain text response
      const text = await res.text();
      return { message: text };
    }
  } catch (error) {
    console.error("❌ API call failed:", error);
    throw error;
  }
};

export const fetchJobs = async () => {
  try{
    const res = await fetch(`${API_BASE_URL}/`, {
      method:"GET",
      credentials: "include"
    });

    if(!res.ok){
      throw new Error("Warning! Response is not good!");
    }
  }catch(error){
    throw error;
  }
}
