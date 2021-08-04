const express = require("express");

const path = require("express");

const app = express();

const PORT = process.env.PORT || 8000;

app.get ("", (req, res) => {
    res.status(200).send("MEAN");
});

app.listen(PORT, () => {
    console.log(`Listenings to request from: https://localhost:${PORT}`);
});

