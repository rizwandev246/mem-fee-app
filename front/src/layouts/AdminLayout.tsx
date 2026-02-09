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
                <header className="h-16 bg-white border-b flex items-center justify-between px-6">
                    <div>
                        <p className="text-sm text-gray-500">Welcome back,</p>
                        <h2 className="text-lg font-semibold">Admin</h2>
                    </div>

                    <div className="flex items-center gap-4">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="hidden md:block px-3 py-1.5 border rounded-md text-sm"
                        />
                        <div className="w-8 h-8 rounded-full bg-gray-300" />
                    </div>
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
                `block px-4 py-2 text-sm ${isActive
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
