import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import type { MenuItem as MenuItemType } from "@/data/mockData";

interface Props {
  item: MenuItemType;
}

export default function MenuItemCard({ item }: Props) {
  const { addItem } = useCart();

  return (
    <div className="flex gap-4 rounded-xl border bg-card p-4 transition hover:shadow-md">
      <div className="flex-1">
        <h4 className="font-semibold text-card-foreground">{item.name}</h4>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{item.description}</p>
        <p className="mt-2 font-bold text-primary">${item.price.toFixed(2)}</p>
      </div>
      <div className="relative flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="h-24 w-24 rounded-lg object-cover"
          loading="lazy"
        />
        <Button
          size="icon"
          className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full shadow-lg"
          onClick={() => addItem(item)}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
