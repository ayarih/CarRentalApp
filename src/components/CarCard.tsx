import { Link } from "react-router-dom";
import { Users, Briefcase, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarCardProps {
  id: string;
  name: string;
  category: string;
  image: string;
  seats: number;
  bags: number;
  transmission: string;
  price: number;
}

export const CarCard = ({ id, name, category, image, seats, bags, transmission, price }: CarCardProps) => {
  return (
    <Link to={`/car/${id}`} className="block">
      <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all">
        <div className="aspect-video bg-gradient-to-br from-muted/50 to-muted p-4 flex items-center justify-center">
          <img src={image} alt={name} className="w-full h-full object-contain" />
        </div>
        
        <div className="p-4">
          <p className="text-sm text-muted-foreground mb-1">{category}</p>
          <h3 className="text-xl font-semibold mb-3">{name}</h3>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{seats}</span>
            </div>
            <div className="flex items-center gap-1">
              <Briefcase className="h-4 w-4" />
              <span>{bags}</span>
            </div>
            <div className="flex items-center gap-1">
              <Settings className="h-4 w-4" />
              <span>{transmission}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold">${price}</span>
              <span className="text-muted-foreground">/day</span>
            </div>
            <Button>Book Now</Button>
          </div>
        </div>
      </div>
    </Link>
  );
};
