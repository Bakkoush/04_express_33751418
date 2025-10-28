====================================================
               Node.js Express Web Server
====================================================

This project is a simple Node.js web server built using the Express framework. 
It listens on port 8000 and serves multiple pages such as Home, About, Contact, and Date.

----------------------------------------------------
1. REQUIREMENTS
----------------------------------------------------
- Node.js must be installed on your system.
- Express must be installed using the command:
    npm install express

----------------------------------------------------
2. FILE STRUCTURE
----------------------------------------------------
server.js          -> Main server file (contains Express setup and routes)
routes/main.js     -> Route file for handling additional routes (if used)

----------------------------------------------------
3. HOW THE CODE WORKS
----------------------------------------------------

### Setting up Express
----------------------------------------------------
const express = require("express");
const app = express();
const port = 8000;

- Imports the Express library.
- Creates an Express app instance called "app".
- Sets the port number to 8000 for the server to listen on.

----------------------------------------------------
### Loading Route Handlers
----------------------------------------------------
const mainRoutes = require("./routes/main");
app.use('/', mainRoutes);

- Loads routes from another file named "main.js" located inside the "routes" folder.
- "app.use" mounts these routes at the root ("/") path.

----------------------------------------------------
### Defining Routes
----------------------------------------------------
app.get("/", (req, res) => res.send("Hello World!"));
app.get("/about", (req, res) => res.send("<h1>This is about page</h1>"));
app.get("/contact", (req, res) => res.send("<h1>Contact</h1>"));
app.get("/date", (req, res) => res.send("<h1>23/10/2025</h1>"));

Each route uses:
- app.get() → defines what happens when a GET request is made to a specific path.
- req (request) → contains information about the HTTP request.
- res (response) → used to send data back to the client.

Routes explained:
- "/"        → Displays "Hello World!"
- "/about"   → Displays "This is about page"
- "/contact" → Displays "Contact"
- "/date"    → Displays "23/10/2025"

----------------------------------------------------
### Starting the Server
----------------------------------------------------
app.listen(port, () => console.log(`Node server is running on port ${port}...`));

- Starts the server and listens for incoming requests on port 8000.
- Displays a message in the terminal confirming that the server is running.

----------------------------------------------------
4. HOW TO RUN THE PROJECT
----------------------------------------------------
1. Open the terminal in your project folder.
2. Run the command:
       node server.js
3. Open your web browser and visit:
       http://localhost:8000
4. Try the following routes:
       /          → Home page
       /about     → About page
       /contact   → Contact page
       /date      → Date page

----------------------------------------------------
5. NOTES
----------------------------------------------------
- You can change the port number by editing the 'port' variable.
- To organize your code better, use separate route files in the "routes" folder.
- Express makes it easy to handle multiple pages and different request types.
