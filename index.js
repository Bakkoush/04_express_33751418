// Set up express
const express = require("express");
const app = express();
const port = 8000; 

// Load the route handlers
const mainRoutes = require("./routes/main");  
app.use('/', mainRoutes);

// Handle the routes
// This line defines a route for the home page ("/").
// When a user visits the root URL (e.g. http://localhost:3000/), 
// the server responds with the text "Hello World!".
app.get("/", (req, res) => res.send("Hello World!"));

// This line defines a route for the "/about" page.
// When a user visits http://localhost:3000/about, 
// the server sends back an HTML heading saying "This is about page".
app.get('/about', (req, res) => res.send('<h1>This is about page</h1>'));

// This line defines a route for the "/contact" page.
// When a user visits http://localhost:3000/contact, 
// the server responds with an HTML heading saying "Contact".
app.get('/contact', (req, res) => res.send('<h1>Contact</h1>'));

// This line defines a route for the "/date" page.
// When a user visits http://localhost:3000/date, 
// the server responds with an HTML heading showing the date "23/10/2025".
app.get('/date', (req, res) => res.send('<h1>23/10/2025</h1>'));


// Start listening for HTTP requests
app.listen(port, 
    () => console.log(`Node server is running on port ${port}...`)); 