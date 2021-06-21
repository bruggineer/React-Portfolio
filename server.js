const express = require('express');
const path = require("path");
const app = express();

//set Express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//code for static files
// app.use(express.static(path.join(__dirname, 'public')))
// app.use(express.static(path.join(__dirname, 'src', 'assets')))
app.use(express.static("public"));

// HTML routes
//landing page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("Backend is listening on port " + port)

