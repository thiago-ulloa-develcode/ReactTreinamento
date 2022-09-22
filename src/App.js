import * as React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login-page";
import HomePage from "./pages/home-page";
import RegisterPage from "./pages/register-page";
import ForgotPassword from "./pages/forgotpassword";
import FoodsPage from "./pages/register-page/foods-page";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register-page" element={<RegisterPage />} />
        <Route path="/foods-page" element={<FoodsPage />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;
