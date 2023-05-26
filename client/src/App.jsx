import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./scenes/loginPage";
import HomePage from "./scenes/homePage";
import ProfilePage from "./scenes/profilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";

function App() {
  const mode = useSelector((state) => state.mode);

  return (
    <div className="app bg-gray-200 w-full h-[100vh] overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
