import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  token: null,
  user: null,
};



const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
    },
  },
});

export const { setToken, setUser, logout } = loginSlice.actions;
export default loginSlice.reducer;



// import { useDispatch, useSelector } from 'react-redux';
// import { loginSuccess, logout } from './loginSlice';

// //handling login
// const handleLoginSuccess = (tokenFromBackend, userFromBackend) => {
//     dispatch(setToken('yourTokenValue'));
//     dispatch(setUser({ id: 1, username: 'exampleUser' }));
// }
// // handling logout
// const handleLogout = () => {
//     dispatch(logout())
//     localStorage.removeItem('user');
// }