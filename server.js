// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// In-memory menu array (at least 6 items, 3 categories, veg & non-veg)
const menu = [
  {
    id: 1,
    name: "Margherita Pizza",
    category: "Main Course",
    price: 350,
    isVegetarian: true,
    description: "Classic pizza with tomato, basil and mozzarella"
  },
  {
    id: 2,
    name: "Chicken Tikka Masala",
    category: "Main Course",
    price: 420,
    isVegetarian: false,
    description: "Grilled chicken in rich spiced tomato cream sauce"
  },
  {
    id: 3,
    name: "Paneer Tikka",
    category: "Appetizer",
    price: 250,
    isVegetarian: true,
    description: "Chargrilled cottage cheese with spices"
  },
  {
    id: 4,
    name: "Garlic Bread",
    category: "Appetizer",
    price: 150,
    isVegetarian: true,
    description: "Buttery garlic bread, oven-baked"
  },
  {
    id: 5,
    name: "Gulab Jamun",
    category: "Dessert",
    price: 120,
    isVegetarian: true,
    description: "Soft milk-solid dumplings soaked in syrup"
  },
  {
    id: 6,
    name: "Masala Chai",
    category: "Beverage",
    price: 80,
    isVegetarian: true,
    description: "Indian spiced tea brewed with milk"
  },
  {
    id: 7,
    name: "Fish Fry",
    category: "Main Course",
    price: 380,
    isVegetarian: false,
    description: "Crispy fried fish with tangy masala"
  }
];

// Serve static files from public/
app.use(express.static(path.join(__dirname, 'public')));

// GET /menu - all items
app.get('/menu', (req, res) => {
  res.json(menu);
});

// GET /menu/vegetarian - only vegetarian items
app.get('/menu/vegetarian', (req, res) => {
  const veg = menu.filter(item => item.isVegetarian);
  res.json(veg);
});

// GET /menu/categories - unique categories with itemCount
app.get('/menu/categories', (req, res) => {
  const counts = menu.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});
  
  const categories = Object.keys(counts).map(name => ({
    name,
    itemCount: counts[name]
  }));

  res.json({ categories });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
