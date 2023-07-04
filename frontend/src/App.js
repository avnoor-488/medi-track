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
import AddDoctor from "./components/AddDoctor";
import DashboardD from "./components/DashboardD";
import ViewPatient from "./components/ViewPatient";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard-receptionist" element={<DashboardReception />} />
        <Route path="/dashboard-patient" element={<DashboardPatient />} />
        <Route path="/dashboard-doctor" element={<DashboardDoctor />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboardd" element={<DashboardD />} />
        <Route path="/dashboard/add-patient" element={<AddPatient />} />
        <Route path="/dashboard/add-doctor" element={<AddDoctor />} />
        <Route path="/dashboardd/view-patient" element={<ViewPatient />} />
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
