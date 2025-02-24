const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send(`
        <section>
            <h2>Featured Products</h2>
            <ul>
                <li>Product 1 - $20</li>
                <li>Product 2 - $30</li>
            </ul>
        </section>
    `);
});

app.listen(4002, () => console.log("Product Microfrontend running on http://localhost:4002"));
