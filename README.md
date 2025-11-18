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

### 1. GET /menu
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

6. Installation & Setup Instructions

1. Clone the Repository : 
   git clone https://github.com/mashakurathabasuns96-ux/restaurant-menu-api

2. Navigate to the project directory : cd restaurant-menu-api

3. Install backend dependencies : npm install

4. Start the Server : npm start

5. Access the Application

### Backend API Endpoints:

http://localhost:3000/menu

http://localhost:3000/menu/vegetarian

http://localhost:3000/menu/categories

### Frontend:

Visit http://localhost:3000/ in your browser.

7. Features

*In-memory menu data (no DB required)

*3 GET endpoints: all items, vegetarian items, categories with counts

*Simple frontend that fetches and displays data

*Vegetarian/non-veg indicated visually

*Basic error handling on frontend

8. GitHub Repository Link : https://github.com/mashakurathabasuns96-ux/restaurant-menu-api.git

9. Author Information : Mashkura Thabasum 
