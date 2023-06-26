import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Role from "./components/Role";
import DashboardReception from "./components/DashboardReception";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPatient from "./components/DashboardPatient";
import DashboardDoctor from "./components/DashboardDoctor";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard-receptionist" element={<DashboardReception />} />
        <Route path="/dashboard-patient" element={<DashboardPatient />} />
        <Route path="/dashboard-doctor" element={<DashboardDoctor />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

function LandingPage() {
  return (
    <>
      <Navbar />
      <Home />
      <Role />
    </>
  );
}

export default App;
