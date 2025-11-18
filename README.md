# Saffron Spoon - Restaurant Menu API

## About the Restaurant

Saffron Spoon is a cozy fusion restaurant blending Indian and Continental flavors. We focus on fresh ingredients and bold spices for a comfortable, flavorful dining experience.

## Project Description

This project implements a simple Restaurant Menu Display API using Node.js and Express, plus a frontend HTML page that fetches menu data from the API.

**Technologies Used:**
- Node.js  
- Express.js  
- HTML  
- CSS  
- JavaScript (Fetch API)

## Menu Categories Available

- Appetizer
- Main Course
- Dessert
- Beverage


## Project Structure

restaurant-menu-api/
├─ public/
│ ├─ index.html
│ ├─ css/styles.css
│ └─ js/main.js
├─ .gitignore
├─ package.json
├─ server.js
└─ README.md


## API Documentation

### 1. GET `/menu`
- **Method:** GET 

- **Description:** Returns an array of all menu items.  

- **Sample Response:**

[
 {
        "id": 1,
        "name": "Margherita Pizza",
        "category": "Main Course",
        "price": 350,
        "isVegetarian": true,
        "description": "Classic pizza with tomato, basil and mozzarella"
    },
]

### 2. GET /menu/vegetarian

**Method:** GET

**Description:** Returns only items where isVegetarian is true.

**Sample Response:**

[
   {
        "id": 5,
        "name": "Gulab Jamun",
        "category": "Dessert",
        "price": 120,
        "isVegetarian": true,
        "description": "Soft milk-solid dumplings soaked in syrup"
    },
]

### 3. GET /menu/categories

**Method:** GET

**Description:** Returns unique categories and item counts.

**Sample Response:**

{
  "categories": [
    { "name": "Appetizer", "itemCount": 2 },
    { "name": "Main Course", "itemCount": 3 }
  ]
}
