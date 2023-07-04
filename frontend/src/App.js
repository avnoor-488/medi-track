import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Role from "./components/Role";
import LoginReception from "./components/LoginReception";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPatient from "./components/LoginPatient";
import LoginDoctor from "./components/LoginDoctor";
import Dashboard from "./components/Dashboard";
import AddPatient from "./components/AddPatient";
import Services from "./components/Services";
import About from "./components/About";
import AddDoctor from "./components/AddDoctor";
import DashboardDoctor from "./components/DashboardDoctor";
import ViewNewPatient from "./components/ViewNewPatient";
import ViewOldPatient from "./components/ViewOldPatient";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login-receptionist" element={<LoginReception />} />
        <Route path="/login-patient" element={<LoginPatient />} />
        <Route path="/login-doctor" element={<LoginDoctor />} />
        <Route path="/dashboard-receptionist" element={<Dashboard />} />
        <Route path="/dashboard-receptionist/add-patient" element={<AddPatient />} />
        <Route path="/dashboard-receptionist/add-doctor" element={<AddDoctor />} />
        <Route path="/dashboard-doctor" element={<DashboardDoctor />} />
        <Route path="/dashboard-doctor/view-new-patient" element={<ViewNewPatient />} />
        <Route path="/dashboard-doctor/view-old-patient" element={<ViewOldPatient />} />

      </Routes>
    </Router>
  );
}

function LandingPage() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Role />
      <Services />
    </>
  );
}

export default App;
