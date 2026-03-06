import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BrowserFreelancer from "./pages/Browserfreelancer";
import Dashboard from "./pages/Dashboard";
import Workspace from "./pages/workspace";
import Proposal from "./pages/propsoal";
import Aiassistance from "./pages/Aiassistance";
import Postproject from "./pages/Postproject";
import Comparepropoal from "./pages/comparepropoal";
import Wallet from "./pages/Wallet";
import Milestone from "./pages/Milestone";
import Milestonpaymenthistory from "./pages/Milestonpaymenthistory";
import Milestonedetails from "./pages/Milestonedetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/browse" element={<BrowserFreelancer />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/workspace" element={<Workspace />} />
        <Route path="/proposal" element={<Proposal />} />
        <Route path="/ai-assistant" element={<Aiassistance />} />
        <Route path="/post-project" element={<Postproject />} />
        <Route path="/compare-proposals" element={<Comparepropoal />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/milestone" element={<Milestone />} />
        <Route path="/milestone-history" element={<Milestonpaymenthistory />} />
        <Route path="/milestone-details" element={<Milestonedetails />} />
      </Routes>
    </Router>
  );
}

export default App;
