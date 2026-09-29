import React, { createContext, useContext, useState } from "react";

const DoctorContext = createContext();

export const DoctorProvider = ({ children }) => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const selectDoctor = (doctor) => {
    setSelectedDoctor(doctor);
  };

  return (
    <DoctorContext.Provider
      value={{
        selectedDoctor,
        selectDoctor,
      }}
    >
      {children}
    </DoctorContext.Provider>
  );
};

export const useDoctor = () => {
  return useContext(DoctorContext);
};