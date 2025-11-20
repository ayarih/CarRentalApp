import { NavLink } from "@/components/NavLink";
import { Compass, Calendar, Heart, User } from "lucide-react";

export const BottomNav = () => {
  const navItems = [
    { to: "/", icon: Compass, label: "Explore" },
    { to: "/bookings", icon: Calendar, label: "Bookings" },
    { to: "/favorites", icon: Heart, label: "Favorites" },
    { to: "/profile", icon: User, label: "Profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="max-w-md mx-auto flex justify-around items-center h-16 px-4">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end
            className="flex flex-col items-center justify-center gap-1 text-muted-foreground transition-colors"
            activeClassName="text-primary"
          >
            <item.icon className="h-5 w-5" />
            <span className="text-xs font-medium">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
