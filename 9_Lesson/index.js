const express = require("express");
const app = express();
const PORT = 5001;
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/register", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.post("/register", (req, res) => {
  const name = req.body.username;
  const age = req.body.userage;
  res.send(`you are ${name} and your age is ${age}`);
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
