import { Dashboard } from "@mui/icons-material";
import "./App.css";
import HomeLayout from "./pages/HomeLayout"; // Layout will contain the dashboard
import { createBrowserRouter, Routes, Route } from "react-router-dom";


const router = createBrowserRouter([
  {path: "/",
    element: <App />,
    // loader: appLoader,
    children: [
      {
        path: "dashboard",
        element: <HomeLayout />,
        // loader: homeLoader
        children: [
          {
            path: ""
          }
        ]
      }
    ]
}
])
function App() {
  return (
    <>
      <HomeLayout />
    </>
  );
}

export default App;
