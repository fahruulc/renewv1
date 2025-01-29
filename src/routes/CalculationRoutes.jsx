// src/routes/kalkulasiRoutes.js
import { Route, Routes } from "react-router-dom";
import { Calculation } from "../pages/Calculation";

export const CalculationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Calculation />} />
    </Routes>
  );
};
