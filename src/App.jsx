import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminLogin from "./pages/AdminLogin";
import AdminSignup from "./pages/AdminSignup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/signup" element={<AdminSignup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
