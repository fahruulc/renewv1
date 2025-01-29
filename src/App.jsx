// src/App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import Login from "./pages/Login";
import { MonitoringRoutes } from "./routes/MonitoringRoutes";
import { CalculationRoutes } from "./routes/CalculationRoutes";
import { Registration } from "./pages/Registration";
import { FrameLayout } from "./components/layouts/FrameLayout";

import theme from "./utils/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route element={<FrameLayout />}>
            <Route path="/monitoring/*" element={<MonitoringRoutes />} />
            <Route path="/calculation/*" element={<CalculationRoutes />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
