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
  { id: "pizza", name: "Pizza", icon: "🍕" },
  { id: "burgers", name: "Burgers", icon: "🍔" },
  { id: "sushi", name: "Sushi", icon: "🍣" },
  { id: "mexican", name: "Mexican", icon: "🌮" },
  { id: "desserts", name: "Desserts", icon: "🍰" },
  { id: "healthy", name: "Healthy", icon: "🥗" },
];

export const restaurants: Restaurant[] = [
  {
    id: "r1",
    name: "Pizza Palace",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop",
    categories: ["pizza"],
    rating: 4.8,
    deliveryTime: "25-35 min",
    deliveryFee: 2.99,
    description: "Authentic wood-fired pizzas made with love",
  },
  {
    id: "r2",
    name: "Burger Barn",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop",
    categories: ["burgers"],
    rating: 4.6,
    deliveryTime: "20-30 min",
    deliveryFee: 1.99,
    description: "Juicy handcrafted burgers and crispy fries",
  },
  {
    id: "r3",
    name: "Sushi Zen",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&h=400&fit=crop",
    categories: ["sushi", "healthy"],
    rating: 4.9,
    deliveryTime: "30-45 min",
    deliveryFee: 3.99,
    description: "Fresh sushi rolls and Japanese delicacies",
  },
  {
    id: "r4",
    name: "Taco Fiesta",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=400&fit=crop",
    categories: ["mexican"],
    rating: 4.5,
    deliveryTime: "20-30 min",
    deliveryFee: 1.49,
    description: "Authentic Mexican street food",
  },
  {
    id: "r5",
    name: "Sweet Tooth Bakery",
    image: "https://images.unsplash.com/photo-1486427944544-d2c246c4df14?w=600&h=400&fit=crop",
    categories: ["desserts"],
    rating: 4.7,
    deliveryTime: "15-25 min",
    deliveryFee: 2.49,
    description: "Decadent cakes, pastries, and treats",
  },
  {
    id: "r6",
    name: "Green Bowl",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop",
    categories: ["healthy"],
    rating: 4.4,
    deliveryTime: "20-30 min",
    deliveryFee: 2.99,
    description: "Nutritious bowls and fresh salads",
  },
  {
    id: "r7",
    name: "Napoli Express",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=400&fit=crop",
    categories: ["pizza"],
    rating: 4.3,
    deliveryTime: "30-40 min",
    deliveryFee: 0.99,
    description: "Quick Italian favorites delivered fast",
  },
  {
    id: "r8",
    name: "The Patty House",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&h=400&fit=crop",
    categories: ["burgers"],
    rating: 4.7,
    deliveryTime: "15-25 min",
    deliveryFee: 1.99,
    description: "Gourmet smashed burgers and shakes",
  },
];

export const menuItems: MenuItem[] = [
  // Pizza Palace
  { id: "m1", restaurantId: "r1", name: "Margherita", description: "Fresh mozzarella, basil, tomato sauce", price: 12.99, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&h=200&fit=crop", section: "Classics" },
  { id: "m2", restaurantId: "r1", name: "Pepperoni", description: "Loaded with pepperoni and mozzarella", price: 14.99, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300&h=200&fit=crop", section: "Classics" },
  { id: "m3", restaurantId: "r1", name: "BBQ Chicken", description: "Grilled chicken, BBQ sauce, red onion", price: 15.99, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=200&fit=crop", section: "Specials" },
  { id: "m4", restaurantId: "r1", name: "Garlic Bread", description: "Toasted with garlic butter and herbs", price: 5.99, image: "https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?w=300&h=200&fit=crop", section: "Sides" },
  // Burger Barn
  { id: "m5", restaurantId: "r2", name: "Classic Smash", description: "Double patty, cheese, lettuce, tomato", price: 11.99, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop", section: "Burgers" },
  { id: "m6", restaurantId: "r2", name: "Bacon BBQ", description: "Crispy bacon, cheddar, BBQ sauce", price: 13.99, image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=300&h=200&fit=crop", section: "Burgers" },
  { id: "m7", restaurantId: "r2", name: "Loaded Fries", description: "Cheese sauce, jalapeños, bacon bits", price: 7.99, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&h=200&fit=crop", section: "Sides" },
  { id: "m8", restaurantId: "r2", name: "Milkshake", description: "Thick vanilla or chocolate shake", price: 5.99, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&h=200&fit=crop", section: "Drinks" },
  // Sushi Zen
  { id: "m9", restaurantId: "r3", name: "Salmon Roll", description: "Fresh salmon, avocado, cucumber", price: 13.99, image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=300&h=200&fit=crop", section: "Rolls" },
  { id: "m10", restaurantId: "r3", name: "Dragon Roll", description: "Eel, avocado, tobiko on top", price: 16.99, image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=300&h=200&fit=crop", section: "Rolls" },
  { id: "m11", restaurantId: "r3", name: "Edamame", description: "Steamed and salted soybeans", price: 4.99, image: "https://images.unsplash.com/photo-1564093497595-593b96d80180?w=300&h=200&fit=crop", section: "Starters" },
  { id: "m12", restaurantId: "r3", name: "Miso Soup", description: "Traditional Japanese miso broth", price: 3.99, image: "https://images.unsplash.com/photo-1607301405390-d831c242f59b?w=300&h=200&fit=crop", section: "Starters" },
  // Taco Fiesta
  { id: "m13", restaurantId: "r4", name: "Carne Asada Tacos", description: "Grilled steak, cilantro, onion", price: 10.99, image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=300&h=200&fit=crop", section: "Tacos" },
  { id: "m14", restaurantId: "r4", name: "Chicken Burrito", description: "Loaded with rice, beans, and salsa", price: 11.99, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop", section: "Burritos" },
  { id: "m15", restaurantId: "r4", name: "Guacamole & Chips", description: "Fresh-made guac with tortilla chips", price: 6.99, image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=300&h=200&fit=crop", section: "Sides" },
  { id: "m16", restaurantId: "r4", name: "Churros", description: "Crispy cinnamon sugar with chocolate", price: 5.99, image: "https://images.unsplash.com/photo-1624371414361-e670246a8b4a?w=300&h=200&fit=crop", section: "Desserts" },
  // Sweet Tooth Bakery
  { id: "m17", restaurantId: "r5", name: "Chocolate Cake", description: "Rich triple-layer chocolate cake", price: 8.99, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop", section: "Cakes" },
  { id: "m18", restaurantId: "r5", name: "Cheesecake", description: "New York-style with berry compote", price: 7.99, image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=300&h=200&fit=crop", section: "Cakes" },
  { id: "m19", restaurantId: "r5", name: "Croissant", description: "Buttery flaky French pastry", price: 3.99, image: "https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=300&h=200&fit=crop", section: "Pastries" },
  { id: "m20", restaurantId: "r5", name: "Macarons Box", description: "Assorted flavors, box of 6", price: 12.99, image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=300&h=200&fit=crop", section: "Pastries" },
  // Green Bowl
  { id: "m21", restaurantId: "r6", name: "Açaí Bowl", description: "Açaí, granola, banana, berries", price: 10.99, image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=300&h=200&fit=crop", section: "Bowls" },
  { id: "m22", restaurantId: "r6", name: "Quinoa Power Bowl", description: "Quinoa, chickpeas, avocado, greens", price: 12.99, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop", section: "Bowls" },
  { id: "m23", restaurantId: "r6", name: "Green Smoothie", description: "Spinach, banana, mango, almond milk", price: 6.99, image: "https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?w=300&h=200&fit=crop", section: "Drinks" },
  { id: "m24", restaurantId: "r6", name: "Avocado Toast", description: "Sourdough, avocado, seeds, chili flakes", price: 8.99, image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=300&h=200&fit=crop", section: "Toasts" },
  // Napoli Express
  { id: "m25", restaurantId: "r7", name: "Four Cheese", description: "Mozzarella, gorgonzola, parmesan, fontina", price: 14.99, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop", section: "Pizza" },
  { id: "m26", restaurantId: "r7", name: "Prosciutto & Arugula", description: "Prosciutto, arugula, shaved parmesan", price: 16.99, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=200&fit=crop", section: "Pizza" },
  { id: "m27", restaurantId: "r7", name: "Tiramisu", description: "Classic Italian coffee dessert", price: 7.99, image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300&h=200&fit=crop", section: "Desserts" },
  { id: "m28", restaurantId: "r7", name: "Bruschetta", description: "Tomato, basil, garlic on toasted bread", price: 6.99, image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=300&h=200&fit=crop", section: "Starters" },
  // The Patty House
  { id: "m29", restaurantId: "r8", name: "Truffle Smash", description: "Truffle aioli, Swiss, caramelized onion", price: 15.99, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=300&h=200&fit=crop", section: "Burgers" },
  { id: "m30", restaurantId: "r8", name: "Spicy Jalapeño", description: "Pepper jack, jalapeños, chipotle mayo", price: 13.99, image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=300&h=200&fit=crop", section: "Burgers" },
  { id: "m31", restaurantId: "r8", name: "Onion Rings", description: "Beer-battered crispy onion rings", price: 6.99, image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=300&h=200&fit=crop", section: "Sides" },
  { id: "m32", restaurantId: "r8", name: "Oreo Shake", description: "Cookies and cream thick shake", price: 6.99, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&h=200&fit=crop", section: "Drinks" },
];
