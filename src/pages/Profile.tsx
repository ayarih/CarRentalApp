import { Link } from "react-router-dom";
import { ArrowLeft, ChevronRight, Calendar, CreditCard, Bell, Settings, HelpCircle, LogOut } from "lucide-react";
import { BottomNav } from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import profileAvatar from "@/assets/profile-avatar.png";

const Profile = () => {
  const menuItems = [
    { icon: Calendar, label: "My Bookings", href: "/bookings", badge: null },
    { icon: CreditCard, label: "Payment Methods", href: "#", badge: null },
    { icon: Bell, label: "Notifications", href: "#", badge: 3 },
  ];

  const settingsItems = [
    { icon: Settings, label: "Settings", href: "#" },
    { icon: HelpCircle, label: "Help & Support", href: "#" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-border">
        <Link to="/" className="p-2">
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-xl font-semibold">Account</h1>
        <div className="w-10" />
      </header>

      {/* Profile Section */}
      <div className="flex flex-col items-center py-8 border-b border-border">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-muted">
          <img 
            src={profileAvatar} 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-2xl font-bold mb-1">Hanine Ayari</h2>
        <p className="text-muted-foreground mb-4">ayarihanine@exemple.com</p>
        <Button variant="outline" size="lg">
          Edit Profile
        </Button>
      </div>

      {/* Menu Items */}
      <div className="p-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            className="flex items-center gap-4 p-4 bg-card rounded-2xl border border-border hover:border-primary/50 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
              <item.icon className="h-5 w-5" />
            </div>
            <span className="flex-1 font-medium">{item.label}</span>
            {item.badge && (
              <Badge className="bg-primary text-primary-foreground">
                {item.badge}
              </Badge>
            )}
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </Link>
        ))}
      </div>

      {/* Settings Section */}
      <div className="p-4 space-y-2 border-t border-border mt-4">
        {settingsItems.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            className="flex items-center gap-4 p-4 bg-card rounded-2xl border border-border hover:border-primary/50 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
              <item.icon className="h-5 w-5" />
            </div>
            <span className="flex-1 font-medium">{item.label}</span>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </Link>
        ))}
      </div>

      {/* Logout Button */}
      <div className="p-4 mt-8">
        <button className="w-full py-4 bg-destructive/10 text-destructive rounded-2xl font-medium flex items-center justify-center gap-2 hover:bg-destructive/20 transition-colors">
          <LogOut className="h-5 w-5" />
          Logout
        </button>
      </div>

      <BottomNav />
    </div>
  );
};

export default Profile;
