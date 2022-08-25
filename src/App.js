import * as React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login-page";
import HomePage from "./pages/home-page";
import RegisterPage from "./pages/register-page";
import RegisterPage2 from "./pages/register-page/page2";
import ForgotPassword from "./pages/forgotpassword";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register-page" element={<RegisterPage />} />
        <Route path="/register-page2" element={<RegisterPage2 />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;
