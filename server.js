const express = require('express');
const path = require("path");
const app = express();

//set Express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//code for dev
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'src', 'assets')))


// //code for gh-pages build
// app.use(express.static(path.join(__dirname, "..", "build")));

// app.use((req, res, next) => {
//     res.sendFile(path.join(__dirname, "..", "build", "react-app", "index.html"));
// });

const port = process.env.PORT || 5000;
app.listen(port);

console.log("Backend is listening on port " + port)

