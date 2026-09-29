import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Doctors from "./pages/Doctors";
import SexualHealth from "./concerns/SexualHealth";
import IndividualTherapy from "./concerns/IndividualTherapy";
import { DoctorProvider } from "./context/DoctorContext";
import Appointment from "./appointments/Appointment";

const App = () => {
  return (
    <div className="mx-2 sm:mx-[1%]">
      <DoctorProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/doctors" element={<Doctors />} />
             <Route path="/appointment" element={<Appointment />} />
            <Route
              path="/service/sexual-health"
              element={<SexualHealth />}
            />
            <Route
              path="/service/individual-therapy"
              element={<IndividualTherapy />}
            />
          </Route>
        </Routes>
      </DoctorProvider>
    </div>
  );
};

export default App;