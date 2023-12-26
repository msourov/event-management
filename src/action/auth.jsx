import api from "./api";

export const loginUser = async ({ user_id, password }) => {
  try {
    const response = await api().post("role-user/login", {
      user_id: user_id,
      password: password,
    });
    if (response.status === 201) {
      return response.data;
  
    }
    
  } catch (error) {
    if (error.response.status === 400) {
      console.log('5555555',error.response.data)
      
  
    }

  }
};
