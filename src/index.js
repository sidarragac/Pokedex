const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(require('./routes/routes'));
app.use(express.static(__dirname + "/public"));

app.listen(port, () => {
    console.log(`Pokedex APP listening on port ${port}`)
})