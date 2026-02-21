import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./componets/Login";
import Signup from "./componets/Signup";
import BrowserFreelancer from "./componets/Browserfreelancer";
import Dashboard from "./componets/Dashboard";
import Workspace from "./componets/workspace";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/browse" element={<BrowserFreelancer />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/workspace" element={<Workspace />} />
      </Routes>
    </Router>
  );
}

export default App;
