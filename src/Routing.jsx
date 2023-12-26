import {
  createBrowserRouter,
  Route,
  Routes,
  BrowserRouter as Router,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
// import Login from "./pages/Login";
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

export const router = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route element={<PrivateRoutes />}>
            <Route path="role" element={<Role />} />
          </Route>
          ;
          <Route element={<PrivateRoutes />}>
            <Route path="user" element={<User />} />
          </Route>
          ;
          <Route element={<PrivateRoutes />}>
            <Route path="packages" element={<Packages />} />
          </Route>
          ;
          <Route element={<PrivateRoutes />}>
            <Route path="app-user" element={<AppUser />} />
          </Route>
          ;
          <Route element={<PrivateRoutes />}>
            <Route path="storage" element={<Storage />} />
          </Route>
          ;
          <Route element={<PrivateRoutes />}>
            <Route path="ad-list" element={<AdList />} />
          </Route>
          ;
          <Route element={<PrivateRoutes />}>
            <Route path="doctors" element={<Doctors />} />
          </Route>
          ;
          <Route element={<PrivateRoutes />}>
            <Route path="settings" element={<Settings />} />
          </Route>
          ;
          <Route element={<PrivateRoutes />}>
            <Route path="profile" element={<UserProfile />} />
          </Route>
          ;
        </Route>
        <Route path="*" element={<p>Nothing here. Go back.</p>} />
      </Routes>
    </Router>
  );
};
