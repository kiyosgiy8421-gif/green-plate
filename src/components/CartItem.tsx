import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart, type CartItem as CartItemType } from "@/contexts/CartContext";

interface Props {
  item: CartItemType;
}

export default function CartItemCard({ item }: Props) {
  const { updateQuantity, removeItem } = useCart();
  const { menuItem, quantity } = item;

  return (
    <div className="flex items-center gap-4 rounded-xl border bg-card p-4">
      <img src={menuItem.image} alt={menuItem.name} className="h-16 w-16 rounded-lg object-cover" />
      <div className="flex-1">
        <h4 className="font-semibold text-card-foreground">{menuItem.name}</h4>
        <p className="text-sm font-bold text-primary">${(menuItem.price * quantity).toFixed(2)}</p>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={() => updateQuantity(menuItem.id, quantity - 1)}
        >
          <Minus className="h-3 w-3" />
        </Button>
        <span className="w-6 text-center font-medium">{quantity}</span>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={() => updateQuantity(menuItem.id, quantity + 1)}
        >
          <Plus className="h-3 w-3" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-destructive"
          onClick={() => removeItem(menuItem.id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
