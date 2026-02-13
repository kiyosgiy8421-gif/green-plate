

# Food Ordering Web App

A modern, mobile-friendly food ordering application inspired by UberEats with a green and white color theme.

## Pages and Navigation

1. **Home Page** (`/`) - Hero banner, food categories, featured restaurants
2. **Restaurant Page** (`/restaurant/:id`) - Restaurant details, menu organized by sections
3. **Cart Page** (`/cart`) - Cart items, order summary, place order button
4. **Order Confirmation** (`/order-confirmation`) - Success page after placing an order

## Features

- Browse food categories (Pizza, Burgers, Sushi, etc.)
- Filter restaurants by category
- View restaurant menus with item images, descriptions, prices
- Add/remove items to cart with quantity controls
- Cart persisted in React state (Context API)
- Place order flow with confirmation screen
- Responsive design (works on mobile and desktop)

## Data Approach

All data will be **mock/static** -- no database tables needed for now. Restaurant and menu data will live in a TypeScript data file. This keeps things simple and lets you see the full UI immediately.

## Color Theme

Update CSS variables to a modern green and white palette:
- Primary: green (`142 76% 36%`)
- Background: white
- Accent: light green tints
- Cards: white with subtle shadows

## Technical Details

### New Files

| File | Purpose |
|------|---------|
| `src/data/mockData.ts` | Restaurants, categories, menu items |
| `src/contexts/CartContext.tsx` | Cart state management via React Context |
| `src/pages/Home.tsx` | Home page with categories and restaurant grid |
| `src/pages/RestaurantPage.tsx` | Restaurant detail with menu |
| `src/pages/Cart.tsx` | Cart and checkout |
| `src/pages/OrderConfirmation.tsx` | Order success |
| `src/components/CategoryCard.tsx` | Category pill/card component |
| `src/components/RestaurantCard.tsx` | Restaurant preview card |
| `src/components/MenuItem.tsx` | Menu item with add-to-cart button |
| `src/components/CartItem.tsx` | Cart line item with quantity controls |
| `src/components/Header.tsx` | Top nav bar with cart icon and item count |

### Modified Files

| File | Change |
|------|--------|
| `src/index.css` | Green/white color theme variables |
| `src/App.tsx` | Add routes, wrap with CartProvider |

### Mock Data Structure

- **6 categories** with icons (Pizza, Burgers, Sushi, Mexican, Desserts, Healthy)
- **8 restaurants** each tagged with categories, rating, delivery time, delivery fee
- **4-6 menu items per restaurant** with name, description, price, image placeholder

