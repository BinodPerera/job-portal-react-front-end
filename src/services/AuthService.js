const API_URL = `http://localhost:8080/api/auth`;

export const registerUser = async (userData) => {
  const formData = new FormData();
  formData.append("username", userData.username);
  formData.append("password", userData.password);
  formData.append("role", userData.role);
  formData.append("image", userData.image); // image is a File object

  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to register user");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};

export const testing = async (userData) => {
    try {
        const response = await fetch(`${API_URL}/testing`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: "Testing User1"})
        });

        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Error: ", error);
        return { error: "Something went wrong" };
    }
}

export const loginUser = async (username, password) => {
    try{
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({
                username: username, 
                password: password,
            }),
        });
        return response;
    }
    catch(error){
        return(`Error: ${error}`);
    }
}
