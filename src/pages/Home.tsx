import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import CategoryCard from "@/components/CategoryCard";
import RestaurantCard from "@/components/RestaurantCard";
import { categories, restaurants } from "@/data/mockData";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const filtered = restaurants.filter((r) => {
    const matchesCategory = !activeCategory || r.categories.includes(activeCategory);
    const matchesSearch = r.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-6">
        {/* Hero */}
        <section className="mb-8 rounded-3xl bg-primary p-8 text-primary-foreground md:p-12">
          <h1 className="text-3xl font-bold md:text-5xl">Delicious food,<br />delivered to you</h1>
          <p className="mt-3 text-lg opacity-90">Order from the best local restaurants</p>
          <div className="relative mt-6 max-w-md">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search restaurants..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-12 rounded-full bg-background pl-10 text-foreground"
            />
          </div>
        </section>

        {/* Categories */}
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">Categories</h2>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <CategoryCard
                key={cat.id}
                category={cat}
                isActive={activeCategory === cat.id}
                onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
              />
            ))}
          </div>
        </section>

        {/* Restaurant Grid */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">
            {activeCategory ? `${categories.find((c) => c.id === activeCategory)?.name} Restaurants` : "All Restaurants"}
          </h2>
          {filtered.length === 0 ? (
            <p className="py-12 text-center text-muted-foreground">No restaurants found</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((r) => (
                <RestaurantCard key={r.id} restaurant={r} />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
