import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { BottomNav } from "@/components/BottomNav";
import { CarCard } from "@/components/CarCard";
import { Button } from "@/components/ui/button";
import { cars } from "@/data/cars";

const Favorites = () => {
  // For demo purposes, showing luxury and electric cars as favorites
  const favoritesCars = cars.filter(car => ["Luxury", "Electric"].includes(car.category));

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-border">
        <Link to="/" className="p-2">
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-xl font-semibold">Favorites</h1>
        <div className="w-10" />
      </header>

      {/* Content */}
      <main className="p-4">
        {favoritesCars.length > 0 ? (
          <div className="space-y-4">
            {favoritesCars.map((car) => (
              <CarCard key={car.id} {...car} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No favorites yet</p>
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

export default Favorites;
