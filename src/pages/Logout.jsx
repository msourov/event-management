import { useDispatch, useSelector } from "react-redux";
import { logout } from "../state/reducers/loginSlice";

const Logout = () => {
  const dispatch = useDispatch();
  dispatch(logout());
};

export default Logout;
