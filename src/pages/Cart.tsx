import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingBag, Banknote, Truck } from "lucide-center";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import CartItemCard from "@/components/CartItem";
import { useCart } from "@/contexts/CartContext";

export default function Cart() {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [paymentMethod, setPaymentMethod] = useState<"COD" | "BANK">("COD");

  const deliveryFee = items.length > 0 ? 150.00 : 0;
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

            <div className="mt-8">
              <h2 className="mb-4 text-lg font-semibold">Select Payment Method</h2>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setPaymentMethod("COD")}
                  className={`flex flex-col items-center gap-2 rounded-xl border p-4 transition-all ${
                    paymentMethod === "COD" ? "border-primary bg-primary/5 ring-1 ring-primary" : "bg-card"
                  }`}
                >
                  <Truck className={`h-6 w-6 ${paymentMethod === "COD" ? "text-primary" : "text-muted-foreground"}`} />
                  <span className="text-sm font-medium">Cash on Delivery</span>
                </button>

                <button
                  onClick={() => setPaymentMethod("BANK")}
                  className={`flex flex-col items-center gap-2 rounded-xl border p-4 transition-all ${
                    paymentMethod === "BANK" ? "border-primary bg-primary/5 ring-1 ring-primary" : "bg-card"
                  }`}
                >
                  <Banknote className={`h-6 w-6 ${paymentMethod === "BANK" ? "text-primary" : "text-muted-foreground"}`} />
                  <span className="text-sm font-medium">Bank Transfer</span>
                </button>
              </div>
            </div>

            {paymentMethod === "BANK" && (
              <div className="mt-4 animate-in fade-in slide-in-from-top-2 rounded-xl border border-dashed border-primary/50 bg-primary/5 p-5">
                <h3 className="mb-2 font-bold text-primary">Bank Details for Payment:</h3>
                <div className="space-y-1 text-sm text-foreground">
                  <p><span className="font-semibold">Bank Name:</span> Commercial Bank</p>
                  <p><span className="font-semibold">Account Name:</span> C.L.S.Palihena</p>
                  <p><span className="font-semibold">Account Number:</span> 8197000498</p>
                  <p><span className="font-semibold">Branch:</span> Godakawela</p>
                  <p className="mt-3 text-xs text-muted-foreground italic">
                    * Please send the payment receipt to our WhatsApp to confirm your order.
                  </p>
                </div>
              </div>
            )}

            <div className="mt-6 space-y-2 rounded-xl border bg-card p-5">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>Rs. {totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Delivery fee</span>
                <span>Rs. {deliveryFee.toFixed(2)}</span>
              </div>
              <div className="border-t pt-2">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary">Rs. {total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <Button onClick={handlePlaceOrder} className="mt-6 h-12 w-full rounded-full text-base font-semibold">
              Confirm Order — Rs. {total.toFixed(2)}
            </Button>
          </>
        )}
      </main>
    </div>
  );
}
