const express = require("express");
const path = require("path");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../purrfect-pet-shop/build")));
}

app.use(routes);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../purrfect-pet-shop/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
