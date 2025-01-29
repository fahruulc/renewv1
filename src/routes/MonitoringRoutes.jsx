import { Route, Routes } from "react-router-dom";
import { Monitoring } from "../pages/Monitoring";
import { TambahMonitoring } from "../pages/TambahMonitoring";

export const MonitoringRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Monitoring />} />
        <Route path=":id" element={<TambahMonitoring />} />
      </Route>
    </Routes>
  );
};
