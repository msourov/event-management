import { RouterProvider } from "react-router-dom";
import { router } from "./Routing";
import "./App.css";
import HomeLayout from "./pages/HomeLayout";

function App() {
  return (
    <>
      <RouterProvider router={router}>
        <HomeLayout />
      </RouterProvider>
    </>
  );
}

export default App;
