import * as React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login-page";
import HomePage from "./pages/home-page";
import RegisterPage from "./pages/register-page";
import ForgotPassword from "./pages/forgotpassword";
import FoodsPage from "./pages/foods-page/foods-page";
import AddressPage from "./pages/address-page/address-page";
import ProfilePage from "./pages/profile-page";
import PlatesPage from "./pages/plates-page";
import NewPlatePage from "./pages/newplate-page";
import PromotionsPage from "./pages/promotions-page";
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
        <Route path="/address-page" element={<AddressPage />} />
        <Route path="/profile-page" element={<ProfilePage />} />
        <Route path="/plates-page" element={<PlatesPage />} />
        <Route path="/newplate-page" element={<NewPlatePage />} />
        <Route path="/promotions-page" element={<PromotionsPage />} />
      </Routes>
    </div>
  );
}

export default App;
