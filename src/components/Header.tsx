import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Badge } from "@/components/ui/badge";

export default function Header() {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">🍽️</span>
          <span className="text-xl font-bold text-primary">FoodDash</span>
        </Link>
        <Link to="/cart" className="relative flex items-center gap-1 rounded-full bg-primary px-4 py-2 text-primary-foreground transition hover:bg-primary/90">
          <ShoppingCart className="h-5 w-5" />
          {totalItems > 0 && (
            <Badge variant="destructive" className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center p-0 text-xs">
              {totalItems}
            </Badge>
          )}
          <span className="ml-1 text-sm font-medium">Cart</span>
        </Link>
      </div>
    </header>
  );
}
