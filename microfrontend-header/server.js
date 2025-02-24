const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send(`<header style="background:lightblue; padding:10px;"><h1>E-Shop</h1></header>`);
});

app.listen(4001, () => console.log("Header Microfrontend running on http://localhost:4001"));
