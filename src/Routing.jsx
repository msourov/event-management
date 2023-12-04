import {
  createBrowserRouter,
  Route,
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
import { PrivateRoute } from "./PrivateRoute";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />}>
      <Route path="login" element={<Login />} />
      <Route path="role" element={<PrivateRoute element={<Role />} />} />
      <Route path="user" element={<PrivateRoute element={<User />} />} />
      <Route
        path="packages"
        element={<PrivateRoute element={<Packages />} />}
      />
      <Route path="app-user" element={<PrivateRoute element={<AppUser />} />} />
      <Route path="storage" element={<PrivateRoute element={<Storage />} />} />
      <Route path="ad-list" element={<PrivateRoute element={<AdList />} />} />
      <Route path="doctors" element={<PrivateRoute element={<Doctors />} />} />
      <Route
        path="settings"
        element={<PrivateRoute element={<Settings />} />}
      />
      <Route
        path="profile"
        element={<PrivateRoute element={<UserProfile />} />}
      />
      <Route path="signup" element={<Signup />} />
      <Route path="*" element={<p>Nothing here. Go back.</p>} />
    </Route>
  )
);

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomeLayout />,
//     children: [
//       {
//         path: "role",
//         element: <Role />,
//       },
//       {
//         path: "user",
//         element: <User />,
//       },
//       {
//         path: "packages",
//         element: <Packages />,
//       },
//       {
//         path: "app-user",
//         element: <AppUser />,
//       },
//       {
//         path: "storage",
//         element: <Storage />,
//       },
//       {
//         path: "ad-list",
//         element: <AdList />,
//       },
//       {
//         path: "doctors",
//         element: <Doctors />,
//       },
//     ],
//   },
// ]);
