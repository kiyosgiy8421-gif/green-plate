import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, Clock } from "lucide-react";
import Header from "@/components/Header";
import MenuItemCard from "@/components/MenuItem";
import { restaurants, menuItems } from "@/data/mockData";

export default function RestaurantPage() {
  const { id } = useParams<{ id: string }>();
  const restaurant = restaurants.find((r) => r.id === id);
  const items = menuItems.filter((m) => m.restaurantId === id);

  if (!restaurant) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-20 text-center">
          <p className="text-xl text-muted-foreground">Restaurant not found</p>
          <Link to="/" className="mt-4 inline-block text-primary underline">Back to home</Link>
        </div>
      </div>
    );
  }

  const sections = [...new Set(items.map((i) => i.section))];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-6">
        <Link to="/" className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back
        </Link>

        {/* Restaurant Hero */}
        <div className="overflow-hidden rounded-2xl">
          <img src={restaurant.image} alt={restaurant.name} className="h-48 w-full object-cover md:h-64" />
        </div>
        <div className="mt-4">
          <h1 className="text-2xl font-bold md:text-3xl">{restaurant.name}</h1>
          <p className="mt-1 text-muted-foreground">{restaurant.description}</p>
          <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1 font-medium text-primary">
              <Star className="h-4 w-4 fill-primary" /> {restaurant.rating}
            </span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {restaurant.deliveryTime}</span>
            <span>${restaurant.deliveryFee.toFixed(2)} delivery</span>
          </div>
        </div>

        {/* Menu Sections */}
        <div className="mt-8 space-y-8">
          {sections.map((section) => (
            <section key={section}>
              <h2 className="mb-4 text-lg font-semibold">{section}</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {items.filter((i) => i.section === section).map((item) => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
