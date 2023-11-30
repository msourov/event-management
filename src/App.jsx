import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./state/store";
import "./App.css";
import HomeLayout from "./pages/HomeLayout";

function App() {
  return (
    <Provider store={store}>
      <HomeLayout />
    </Provider>
  );
}

export default App;
