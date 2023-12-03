import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./state/store";
import { router } from "./Routing";
import "./App.css";
import HomeLayout from "./pages/HomeLayout";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}>
      <HomeLayout />
      </RouterProvider>
    </Provider>
  );
}

export default App;
