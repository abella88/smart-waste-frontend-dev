import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminLogin from "./pages/AdminLogin";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route → Admin Login */}
        <Route path="/" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
