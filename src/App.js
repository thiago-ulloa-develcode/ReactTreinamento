import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import LoginPage from "./pages/login-page";
import HomePage from "./pages/home-page";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App();