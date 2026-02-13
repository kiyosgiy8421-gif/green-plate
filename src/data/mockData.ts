export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Restaurant {
  id: string;
  name: string;
  image: string;
  categories: string[];
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
  description: string;
}

export interface MenuItem {
  id: string;
  restaurantId: string;
  name: string;
  description: string;
  price: number;
  image: string;
  section: string;
}

export const categories: Category[] = [
  { id: "rice", name: "Rice", icon: "🍛" }, // අලුතින් ඇඩ් කළා
  { id: "pizza", name: "Pizza", icon: "🍕" },
  { id: "burgers", name: "Burgers", icon: "🍔" },
  { id: "sushi", name: "Sushi", icon: "🍣" },
  { id: "desserts", name: "Desserts", icon: "🍰" },
  { id: "healthy", name: "Healthy", icon: "🥗" },
];

export const restaurants: Restaurant[] = [
  {
    id: "r1",
    name: "Green Plate Special", // නම පොඩ්ඩක් වෙනස් කළා
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc9?w=600&h=400&fit=crop",
    categories: ["rice", "pizza"],
    rating: 4.8,
    deliveryTime: "25-35 min",
    deliveryFee: 150.00, // රුපියල් වලින් දැම්මා
    description: "Authentic Sri Lankan Rice & Curry and Pizzas",
  },
  {
    id: "r2",
    name: "Burger Barn",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop",
    categories: ["burgers"],
    rating: 4.6,
    deliveryTime: "20-30 min",
    deliveryFee: 100.00,
    description: "Juicy handcrafted burgers and crispy fries",
  },
  // අනිත් රෙස්ටුරන්ට් ටික ඒ විදිහටම තියෙන්න ඇරියා...
  {
    id: "r3",
    name: "Sushi Zen",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&h=400&fit=crop",
    categories: ["sushi", "healthy"],
    rating: 4.9,
    deliveryTime: "30-45 min",
    deliveryFee: 200.00,
    description: "Fresh sushi rolls and Japanese delicacies",
  },
];

export const menuItems: MenuItem[] = [
  // --- Green Plate Special (r1) ---
  
  // Rice Section
  { id: "rc1", restaurantId: "r1", name: "Chicken Rice & Curry", description: "Sri Lankan red/white rice with 5 vegetable curries and chicken", price: 550.00, image: "https://images.unsplash.com/photo-1589302168068-964664d93dc9?w=300&h=200&fit=crop", section: "Rice & Curry" },
  { id: "rc2", restaurantId: "r1", name: "Egg Fried Rice", description: "Basmati rice tossed with eggs and fresh veggies", price: 750.00, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300&h=200&fit=crop", section: "Rice & Curry" },
  
  // Pizza Section (කලින් තිබුණ ඒවා)
  { id: "m1", restaurantId: "r1", name: "Margherita Pizza", description: "Fresh mozzarella, basil, tomato sauce", price: 1200.00, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&h=200&fit=crop", section: "Pizzas" },
  
  // Drinks Section
  { id: "d1", restaurantId: "r1", name: "Coca-Cola", description: "500ml Cold PET bottle", price: 220.00, image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300&h=200&fit=crop", section: "Soft Drinks" },
  { id: "d2", restaurantId: "r1", name: "Ginger Beer (EGB)", description: "Authentic Sri Lankan Ginger Beer", price: 180.00, image: "https://images.unsplash.com/photo-1624517531484-2900384724a1?w=300&h=200&fit=crop", section: "Soft Drinks" },

  // --- Burger Barn (r2) ---
  { id: "m5", restaurantId: "r2", name: "Classic Smash", description: "Double patty, cheese, lettuce, tomato", price: 950.00, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop", section: "Burgers" },
  { id: "m8", restaurantId: "r2", name: "Milkshake", description: "Thick vanilla or chocolate shake", price: 650.00, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&h=200&fit=crop", section: "Drinks" },
];
