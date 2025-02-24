const express = require("express");
const axios = require("axios");
const app = express();

app.get("/", async (req, res) => {
    try {
        // Fetch Microfrontends
        const [header, products, cart] = await Promise.all([
            axios.get("http://localhost:4001/"),
            axios.get("http://localhost:4002/"),
            axios.get("http://localhost:4003/")
        ]);

        // Assemble Final Page
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Server-Side Composed E-Commerce</title>
            </head>
            <body>
                ${header.data}
                <main>
                    <h2>Welcome to E-Shop</h2>
                    ${products.data}
                </main>
                ${cart.data}
            </body>
            </html>
        `);
    } catch (error) {
        res.status(500).send("Error fetching Microfrontends");
    }
});

app.listen(3000, () => console.log("App Shell running on http://localhost:3000"));
