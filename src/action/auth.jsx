import { useDispatch, useSelector } from "react-redux";
import api from "./api";
import { setError } from "../state/reducers/errorSlice";

export const loginUser = async ({ user_id, password, dispatch }) => {
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
      dispatch(setError(error.response.data.detail));
      console.error(error.response);
    }
  }
};
