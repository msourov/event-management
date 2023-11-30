import axios from "axios";
import { setToken, setUser } from "../state/reducers/loginSlice";
import api from "./api";
import { useDispatch } from "react-redux";

console.log("inside auth");
export const login = async ({ user_id, password }) => {
  const dispatch = useDispatch();
  try {
    const response = await axios.post(
      "http://192.168.60.86:8000/margaret/role-user/login",
      {
        user_id: user_id,
        password: password,
      },
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      console.log("response.data", response.data);
      dispatch(setToken(response.data.access_token));
      dispatch(setUser(response.data.name));
    }
  } catch (error) {
    console.error("Error logging in!", error);
  }
};
