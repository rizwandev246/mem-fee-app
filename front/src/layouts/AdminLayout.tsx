import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type Props = {
  children: ReactNode;
};

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r hidden md:block">
        <div className="p-4 text-lg font-bold text-blue-600">
          Fee Admin
        </div>

        <nav className="mt-4">
          <NavItem to="/">Dashboard</NavItem>
          <NavItem to="/divisions">Divisions</NavItem>
          <NavItem to="/members">Members</NavItem>
          <NavItem to="/fees">Fees</NavItem>
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-14 bg-white border-b flex items-center px-4">
          <h1 className="text-sm font-semibold">
            Members Fee Management
          </h1>
        </header>

        {/* Content */}
        <main className="flex-1 p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

const NavItem = ({
  to,
  children,
}: {
  to: string;
  children: ReactNode;
}) => {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `block px-4 py-2 text-sm ${
          isActive
            ? "bg-blue-100 text-blue-600 font-medium"
            : "text-gray-700 hover:bg-gray-100"
        }`
      }
    >
      {children}
    </NavLink>
  );
};

export default AdminLayout;
