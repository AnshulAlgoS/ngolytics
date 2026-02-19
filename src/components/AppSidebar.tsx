import { NavLink, useLocation } from "react-router-dom";
import { LayoutDashboard, Users, BarChart3, Heart, MapPin, FileText } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/beneficiaries", icon: Users, label: "Beneficiaries" },
  { to: "/analytics", icon: BarChart3, label: "Analytics" },
  { to: "/mapping", icon: MapPin, label: "Mapping" },
  { to: "/reports", icon: FileText, label: "Reports" },
];

const AppSidebar = () => {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 z-30 flex h-screen w-64 flex-col border-r border-border bg-card">
      <div className="flex items-center gap-2.5 px-6 py-5 border-b border-border">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-primary">
          <Heart className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-base font-bold text-foreground leading-tight">ImpactTrack</h1>
          <p className="text-[11px] text-muted-foreground">NGO Impact Platform</p>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.to;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <item.icon className="h-[18px] w-[18px]" />
              {item.label}
            </NavLink>
          );
        })}
      </nav>

      <div className="border-t border-border p-4 flex items-center justify-between">
        <p className="text-xs text-muted-foreground">© 2024 ImpactTrack</p>
        <ThemeToggle />
      </div>
    </aside>
  );
};

export default AppSidebar;
