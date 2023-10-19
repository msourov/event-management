import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
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

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />}>
      {/* <Route path="login" element={<Login />} /> */}
      <Route path="role" element={<Role />} />
      <Route path="user" element={<User />} />
      <Route path="packages" element={<Packages />} />
      <Route path="app-user" element={<AppUser />} />
      <Route path="storage" element={<Storage />} />
      <Route path="ad-list" element={<AdList />} />
      <Route path="doctors" element={<Doctors />} />
      <Route path="settings" element={<Settings />} />
      <Route path="profile" element={<UserProfile />} />
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
