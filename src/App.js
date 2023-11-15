import "./App.css";
import Dashboard from "./Pages/Dashboard";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { ConnectDialog } from "@connect2ic/react";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import { useEffect } from "react";
function App() {
  return (
    <>
      <Navbar />
      <ConnectDialog />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" index element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
