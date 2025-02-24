const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send(`<aside style="background:lightgray; padding:10px;"><p>Cart: 2 Items</p></aside>`);
});

app.listen(4003, () => console.log("Cart Microfrontend running on http://localhost:4003"));
