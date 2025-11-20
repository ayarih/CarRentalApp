import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ArrowLeft, Search, ArrowUpDown, Filter, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BottomNav } from "@/components/BottomNav";
import { CarCard } from "@/components/CarCard";
import { cars } from "@/data/cars";

const Cars = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || "All");

  const categories = ["All", "Economy", "SUV", "Luxury", "Electric", "Convertible"];

  const filteredCars = selectedCategory === "All" 
    ? cars 
    : cars.filter(car => car.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-border">
        <Link to="/" className="p-2">
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-xl font-semibold">New York, USA</h1>
        <button className="p-2">
          <Search className="h-6 w-6" />
        </button>
      </header>

      {/* Categories */}
      <div className="border-b border-border overflow-x-auto">
        <div className="flex gap-1 p-2 min-w-max">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 p-4 border-b border-border">
        <Button variant="outline" size="sm" className="gap-2">
          <ArrowUpDown className="h-4 w-4" />
          Sort By: Price
        </Button>
        <Button variant="outline" size="sm" className="gap-2">
          <Filter className="h-4 w-4" />
          Filters
        </Button>
        <Button variant="outline" size="sm" className="gap-2 ml-auto">
          <Map className="h-4 w-4" />
          Map View
        </Button>
      </div>

      {/* Car List */}
      <main className="p-4 space-y-4">
        {filteredCars.map((car) => (
          <CarCard key={car.id} {...car} />
        ))}
      </main>

      <BottomNav />
    </div>
  );
};

export default Cars;
