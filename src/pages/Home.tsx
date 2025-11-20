import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, User, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BottomNav } from "@/components/BottomNav";
import { Car as CarIcon, Diamond, Zap, Wind } from "lucide-react";
import { cars } from "@/data/cars";

const Home = () => {
  const [location, setLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");

  const categories = [
    { name: "SUV", icon: CarIcon },
    { name: "Luxury", icon: Diamond },
    { name: "Electric", icon: Zap },
    { name: "Convertible", icon: Wind },
  ];

  const premiumFleet = cars.filter(car => ["Luxury", "Electric"].includes(car.category)).slice(0, 2);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-border">
        <button className="p-2">
          <Menu className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-bold">DriveNow</h1>
        <Link to="/profile" className="p-2">
          <User className="h-6 w-6" />
        </Link>
      </header>

      {/* Main Content */}
      <main className="p-4 space-y-8">
        {/* Search Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Find Your Perfect Ride</h2>
          
          <div className="bg-card rounded-2xl p-6 space-y-4 border border-border">
            <div>
              <label className="block text-sm font-medium mb-2">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Enter city or airport"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-10 bg-secondary border-0"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Pick-up Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="pl-10 bg-secondary border-0"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Drop-off Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="date"
                    value={dropoffDate}
                    onChange={(e) => setDropoffDate(e.target.value)}
                    className="pl-10 bg-secondary border-0"
                  />
                </div>
              </div>
            </div>

            <Link to="/cars">
              <Button className="w-full" size="lg">
                Search
              </Button>
            </Link>
          </div>
        </section>

        {/* Categories */}
        <section>
          <h3 className="text-2xl font-bold mb-4">Categories</h3>
          <div className="grid grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/cars?category=${category.name}`}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <category.icon className="h-7 w-7 text-primary" />
                </div>
                <span className="text-sm font-medium">{category.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Premium Fleet */}
        <section>
          <h3 className="text-2xl font-bold mb-4">Premium Fleet</h3>
          <div className="space-y-4">
            {premiumFleet.map((car) => (
              <Link key={car.id} to={`/car/${car.id}`}>
                <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all">
                  <div className="aspect-video bg-gradient-to-br from-muted/50 to-muted p-4 flex items-center justify-center">
                    <img src={car.image} alt={car.name} className="w-full h-full object-contain" />
                  </div>
                  
                  <div className="p-4">
                    <h4 className="text-xl font-semibold mb-2">{car.name}</h4>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span>{car.seats} Seats</span>
                      <span>{car.transmission}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold">${car.price}</span>
                        <span className="text-muted-foreground">/day</span>
                      </div>
                      <Button>Book Now</Button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
};

export default Home;
