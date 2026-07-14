const express = require("express");
const app = express();
const port = 3000;
const now = new Date();

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.get("/about", (req, res) => {
  res.send({ name: "Anshuma Dehury", role: "Learning backend" });
});

app.get("/time", (req, res) => {
  res.send({ hour: now.getHours(), minutes: now.getMinutes() });
});

app.listen(port, () => {
  console.log(`The server run in ${port} port`);
});
