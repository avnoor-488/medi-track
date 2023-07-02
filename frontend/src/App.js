import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Role from "./components/Role";
import DashboardReception from "./components/LoginReception";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPatient from "./components/LoginPatient";
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
        <Route path="/login-receptionist" element={<DashboardReception />} />
        <Route path="/login-patient" element={<DashboardPatient />} />
        <Route path="/login-doctor" element={<DashboardDoctor />} />
        <Route path="/dashboard-receptionist" element={<Dashboard />}  />
        <Route path="/dashboard-receptionist/add-patient" element={<AddPatient />}  />
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
