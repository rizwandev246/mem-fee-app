import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Divisions from "../pages/Divisions";
import Members from "../pages/Members";
import Fees from "../pages/Fees";
import Profile from "../pages/Profile";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/divisions" element={<Divisions />} />
      <Route path="/members" element={<Members />} />
      <Route path="/fees" element={<Fees />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default AppRoutes;
