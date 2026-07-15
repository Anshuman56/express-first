const express = require("express");
const app = express();
const port = 3000;
const now = new Date();

app.use(express.json());
// Custom logger middleware
const requestLogger = (req, res, next) => {
  // Log request details
  console.log(`${new Date().toISOString()} - ${req.method} ${req.originalUrl}`);

  next(); // Pass control to the next middleware
};

app.use(requestLogger);

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.get("/about", (req, res) => {
  res.send({ name: "Anshuma Dehury", role: "Learning backend" });
});

app.get("/time", (req, res) => {
  res.send({ hour: now.getHours(), minutes: now.getMinutes() });
});

app.post("/echo", (req, res) => {
  res.send(`you send: ${JSON.stringify(req.body)}`);
});

app.listen(port, () => {
  console.log(`The server run in ${port} port`);
});
