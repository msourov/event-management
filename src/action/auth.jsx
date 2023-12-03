import api from "./api";

export const loginUser = async ({ user_id, password }) => {
  try {
    const response = await api().post("role-user/login", {
      user_id: user_id,
      password: password,
    });

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error("Error logging in!", error);
  }
};
