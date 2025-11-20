import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { BottomNav } from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import teslaModel3 from "@/assets/tesla-model-3.png";
import jeepWrangler from "@/assets/jeep-wrangler.png";
import fordMustang from "@/assets/ford-mustang.png";

const Bookings = () => {
  const [activeTab, setActiveTab] = useState<"current" | "past">("current");

  const currentBookings = [
    {
      id: "1",
      status: "Active",
      car: "Tesla Model 3",
      dates: "Nov 10 - Nov 15",
      image: teslaModel3,
      statusColor: "text-success",
    },
    {
      id: "2",
      status: "Upcoming",
      car: "Jeep Wrangler",
      dates: "Dec 22 - Dec 28",
      image: jeepWrangler,
      statusColor: "text-info",
    },
  ];

  const pastBookings = [
    {
      id: "3",
      status: "Completed",
      car: "Ford Mustang",
      dates: "Sep 01 - Sep 07",
      image: fordMustang,
      statusColor: "text-muted-foreground",
    },
  ];

  const bookings = activeTab === "current" ? currentBookings : pastBookings;

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-border">
        <Link to="/" className="p-2">
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-xl font-semibold">My Bookings</h1>
        <div className="w-10" />
      </header>

      {/* Tabs */}
      <div className="p-4">
        <div className="bg-card rounded-2xl p-1 flex gap-1 border border-border">
          <button
            onClick={() => setActiveTab("current")}
            className={`flex-1 py-3 rounded-xl font-medium transition-colors ${
              activeTab === "current"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground"
            }`}
          >
            Current
          </button>
          <button
            onClick={() => setActiveTab("past")}
            className={`flex-1 py-3 rounded-xl font-medium transition-colors ${
              activeTab === "past"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground"
            }`}
          >
            Past
          </button>
        </div>
      </div>

      {/* Bookings List */}
      <main className="p-4 space-y-4">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-card rounded-2xl p-4 border border-border flex items-center gap-4"
          >
            <div className="flex-1">
              <p className={`text-sm font-medium mb-1 ${booking.statusColor}`}>
                {booking.status}
              </p>
              <h3 className="text-xl font-semibold mb-1">{booking.car}</h3>
              <p className="text-muted-foreground">{booking.dates}</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-24 h-16 bg-muted rounded-xl overflow-hidden flex items-center justify-center">
                <img 
                  src={booking.image} 
                  alt={booking.car} 
                  className="w-full h-full object-contain"
                />
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </div>
          </div>
        ))}

        {bookings.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No bookings found</p>
            <Link to="/cars">
              <Button>Browse Cars</Button>
            </Link>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
};

export default Bookings;
