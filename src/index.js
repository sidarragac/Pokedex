const express = require("express");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(require('./routes/routes'));
app.use(express.static(__dirname + "/public"));

app.listen(port, () => {
    console.log(`Pokedex APP listening on port ${port}`)
})