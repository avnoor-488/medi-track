import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Role from "./components/Role";
import DashboardReception from "./components/DashboardReception";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPatient from "./components/DashboardPatient";
import DashboardDoctor from "./components/DashboardDoctor";
import Dashboard from "./components/Dashboard";
import AddPatient from "./components/AddPatient";
import Services from "./components/Services";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard-receptionist" element={<DashboardReception />} />
        <Route path="/dashboard-patient" element={<DashboardPatient />} />
        <Route path="/dashboard-doctor" element={<DashboardDoctor />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/add-patient" element={<AddPatient />} />
      </Routes>
    </Router>
  );
}

function LandingPage() {
  return (
    <>
      <Navbar />
      <Home />
      <About/>
      <Role />
      <Services/>
    </>
  );
}

export default App;
