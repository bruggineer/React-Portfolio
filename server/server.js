const express = require('express');
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("/react-app/public"));

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "build", "react-app", "index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on  on port " + port)

