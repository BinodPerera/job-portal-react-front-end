const API_URL = `http://localhost:8080/api/auth`;

export const registerUser = async (userData) => {
  const formData = new FormData();
  formData.append("username", userData.username);
  formData.append("password", userData.password);
  formData.append("role", userData.role);
  formData.append("image", userData.image); // image is a File object

  try {
    const response = await fetch(`${API_URL}/register`, { method: "POST", body: formData });

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

export const loginUser = async (loginDetails) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include', // ✅ Include cookies
      body: JSON.stringify(loginDetails)
    });

    if (!response.ok) {
      throw new Error("Login failed!");
    }

    return await response.text(); // or JSON if backend sends structured response
  } catch (error) {
    console.error("Login error appeared! :", error);
    throw error;
  }
};


