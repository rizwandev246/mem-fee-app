import { Routes, Route } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/Dashboard";
import Divisions from "../pages/Divisions";
import Members from "../pages/Members";
import Fees from "../pages/Fees";
import Profile from "../pages/Profile";

const AppRoutes = () => {
  return (
     <AdminLayout>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/divisions" element={<Divisions />} />
      <Route path="/members" element={<Members />} />
      <Route path="/fees" element={<Fees />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    </AdminLayout>
  );
};

export default AppRoutes;
