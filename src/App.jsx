import "tailwindcss/tailwind.css";
import Signin from "./components/Signin/Signin";
import Home from "./components/Home/Home";
import UserHomePage from "./components/UserHomePage/UserHomePage";
import Singup from "./components/Singup/Singup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sign-in" element={<Signin />} />
        <Route path="sign-up" element={<Singup />} />
        <Route path="user-home" element={<UserHomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
