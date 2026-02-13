import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import CartItemCard from "@/components/CartItem";
import { useCart } from "@/contexts/CartContext";

export default function Cart() {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const deliveryFee = items.length > 0 ? 2.99 : 0;
  const total = totalPrice + deliveryFee;

  const handlePlaceOrder = () => {
    clearCart();
    navigate("/order-confirmation");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container max-w-2xl py-6">
        <Link to="/" className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back
        </Link>
        <h1 className="mb-6 text-2xl font-bold">Your Cart</h1>

        {items.length === 0 ? (
          <div className="flex flex-col items-center py-20 text-center">
            <ShoppingBag className="h-16 w-16 text-muted-foreground/40" />
            <p className="mt-4 text-lg text-muted-foreground">Your cart is empty</p>
            <Button asChild className="mt-4">
              <Link to="/">Browse Restaurants</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="space-y-3">
              {items.map((item) => (
                <CartItemCard key={item.menuItem.id} item={item} />
              ))}
            </div>

            {/* Summary */}
            <div className="mt-6 space-y-2 rounded-xl border bg-card p-5">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Delivery fee</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>
              <div className="border-t pt-2">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <Button onClick={handlePlaceOrder} className="mt-6 h-12 w-full rounded-full text-base font-semibold">
              Place Order — ${total.toFixed(2)}
            </Button>
          </>
        )}
      </main>
    </div>
  );
}
