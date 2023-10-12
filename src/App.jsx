import { useState } from "react";
// import "./App.css";
import HomeLayout from "./pages/HomeLayout"; // Layout will contain the dashboard
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <HomeLayout />
      </BrowserRouter>
    </>
  );
}

export default App;
