import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Share2, Heart, Users, Settings, Zap, Briefcase, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BottomNav } from "@/components/BottomNav";
import { cars } from "@/data/cars";
import { Progress } from "@/components/ui/progress";

const CarDetail = () => {
  const { id } = useParams();
  const car = cars.find((c) => c.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!car) {
    return <div>Car not found</div>;
  }

  const images = car.images || [car.image];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4">
        <Link to="/cars" className="p-2 bg-card/90 backdrop-blur-sm rounded-full">
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <div className="flex gap-2">
          <button className="p-2 bg-card/90 backdrop-blur-sm rounded-full">
            <Share2 className="h-6 w-6" />
          </button>
          <button className="p-2 bg-card/90 backdrop-blur-sm rounded-full">
            <Heart className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Image Carousel */}
      <div className="relative bg-gradient-to-b from-black/40 to-background">
        <div className="aspect-video flex items-center justify-center p-8">
          <img 
            src={images[currentImageIndex]} 
            alt={car.name} 
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Carousel Dots */}
        {images.length > 1 && (
          <div className="flex justify-center gap-2 pb-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentImageIndex 
                    ? "w-8 bg-primary" 
                    : "w-2 bg-muted"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <main className="p-4 space-y-6">
        {/* Title */}
        <div>
          <h1 className="text-3xl font-bold mb-1">{car.name}</h1>
          {car.year && (
            <p className="text-muted-foreground">{car.year} Performance Edition</p>
          )}
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-secondary rounded-2xl p-4 flex flex-col items-center gap-2 border border-border">
            <Users className="h-6 w-6 text-primary" />
            <span className="font-medium">{car.seats} Seats</span>
          </div>
          <div className="bg-secondary rounded-2xl p-4 flex flex-col items-center gap-2 border border-border">
            <Settings className="h-6 w-6 text-primary" />
            <span className="font-medium">{car.transmission}</span>
          </div>
          {car.range && (
            <div className="bg-secondary rounded-2xl p-4 flex flex-col items-center gap-2 border border-border">
              <Zap className="h-6 w-6 text-primary" />
              <span className="font-medium">{car.range} Range</span>
            </div>
          )}
          <div className="bg-secondary rounded-2xl p-4 flex flex-col items-center gap-2 border border-border">
            <Briefcase className="h-6 w-6 text-primary" />
            <span className="font-medium">{car.bags} Bags</span>
          </div>
        </div>

        {/* Features */}
        <div>
          <h2 className="text-xl font-bold mb-3">Features</h2>
          <div className="space-y-2">
            {car.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Price & Book Button */}
        <div className="flex items-center justify-between p-4 bg-card rounded-2xl border border-border">
          <div>
            <span className="text-3xl font-bold">${car.price}</span>
            <span className="text-muted-foreground"> / day</span>
          </div>
          <Button size="lg">Book Now</Button>
        </div>

        {/* Reviews */}
        <div>
          <h2 className="text-xl font-bold mb-4">Reviews</h2>
          <div className="bg-card rounded-2xl p-6 border border-border">
            <div className="flex items-end gap-4 mb-4">
              <div className="text-5xl font-bold">{car.rating}</div>
              <div className="pb-2">
                <div className="flex gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < Math.floor(car.rating) ? "fill-primary text-primary" : "text-muted"}`} 
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">{car.reviews} reviews</p>
              </div>
            </div>

            <div className="space-y-2">
              {car.ratingDistribution.map((item) => (
                <div key={item.stars} className="flex items-center gap-3">
                  <span className="text-sm w-2">{item.stars}</span>
                  <Progress value={item.percentage} className="flex-1 h-2" />
                  <span className="text-sm text-muted-foreground w-10 text-right">
                    {item.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default CarDetail;
