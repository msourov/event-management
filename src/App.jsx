import { Provider } from "react-redux";
import store from "./state/store";
import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import Role from "./pages/user_management/Role";
import User from "./pages/user_management/User";
import Packages from "./pages/tv_app_management/Packages";
import AppUser from "./pages/tv_app_management/AppUser";
import Storage from "./pages/tv_app_management/Storage";
import AdList from "./pages/ad_management/AdList";
import Doctors from "./pages/ad_management/Doctors";
import Settings from "./pages/Settings";
import UserProfile from "./pages/UserProfile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PrivateRoutes from "./PrivateRoutes";
import Logout from "./pages/Logout";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<HomeLayout />}>
              <Route path="signup" element={<Signup />} />
              <Route path="role" element={<Role />} />
              <Route path="user" element={<User />} />
              <Route path="packages" element={<Packages />} />
              <Route path="app-user" element={<AppUser />} />
              <Route path="storage" element={<Storage />} />
              <Route path="ad-list" element={<AdList />} />
              <Route path="doctors" element={<Doctors />} />
              <Route path="settings" element={<Settings />} />
              <Route path="profile" element={<UserProfile />} />
              <Route path="logout" element={<Logout />} />
            </Route>
          </Route>
          <Route path="*" element={<p>Nothing here. Go back.</p>} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
