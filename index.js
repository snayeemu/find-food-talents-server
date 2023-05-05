const express = require("express");
const app = express();
const cors = require("cors");

const chef = require("./chef.json");
app.use(cors());

app.get("/", (req, res) => {
  res.send(chef);
});

app.get("/recipes/:id", (req, res) => {
  const singleChef = chef.find((recipe) => recipe.id === req.params.id);
  res.send(singleChef.recipes);
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
