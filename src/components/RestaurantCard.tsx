import { Link } from "react-router-dom";
import { Star, Clock } from "lucide-react";
import type { Restaurant } from "@/data/mockData";

interface Props {
  restaurant: Restaurant;
}

export default function RestaurantCard({ restaurant }: Props) {
  return (
    <Link to={`/restaurant/${restaurant.id}`} className="group block overflow-hidden rounded-2xl border bg-card shadow-sm transition-all hover:shadow-lg">
      <div className="aspect-[3/2] overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-card-foreground">{restaurant.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-1">{restaurant.description}</p>
        <div className="mt-3 flex items-center gap-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-1 font-medium text-primary">
            <Star className="h-4 w-4 fill-primary" /> {restaurant.rating}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" /> {restaurant.deliveryTime}
          </span>
          <span>
            {restaurant.deliveryFee === 0 ? "Free delivery" : `$${restaurant.deliveryFee.toFixed(2)} delivery`}
          </span>
        </div>
      </div>
    </Link>
  );
}
