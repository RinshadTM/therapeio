import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout
import Layout from "./layout/Layout";

// Main Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Doctors from "./pages/Doctors";
import LoginPage from "./pages/LoginPage";
import Contact from "./pages/Contact";

// Concern Pages
import SexualHealth from "./concerns/SexualHealth";
import IndividualTherapy from "./concerns/IndividualTherapy";
import CoupleTherapy from "./concerns/CoupleTherapy";

// Appointment
import Appointment from "./appointments/Appointment";

// Context
import { DoctorProvider } from "./context/DoctorContext";
import SignupPage from "./pages/SignupPage";


const App = () => {
  return (
    <div className="mx-2 sm:mx-[0%]">
      <DoctorProvider>
        <Routes>

          {/* ================= MAIN WEBSITE ================= */}
          <Route element={<Layout />}>

            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/doctors" element={<Doctors />} />

            <Route path="/appointment" element={<Appointment />} />

            {/* Services */}
            <Route
              path="/service/sexual-health"
              element={<SexualHealth />}
            />

            <Route
              path="/service/individual-therapy"
              element={<IndividualTherapy />}
            />

            <Route
              path="/service/couple-therapy"
              element={<CoupleTherapy />}
            />

            {/* Authentication */}
            <Route
              path="/login"
              element={<LoginPage />}
            />

            {/* Contact */}
            <Route
              path="/contact"
              element={<Contact />}
            />
            <Route path="/register" element={<SignupPage/>}/>
              
            

          </Route>

        </Routes>
      </DoctorProvider>
    </div>
  );
};

export default App;