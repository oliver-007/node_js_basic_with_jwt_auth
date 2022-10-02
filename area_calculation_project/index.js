const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const PORT = 5001;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.get("/area", (req, res) => {
  res.sendFile(`${__dirname}/area.html`);
});
app.get("/circle", (req, res) => {
  res.sendFile(`${__dirname}/circle.html`);
});

app.post("/area", (req, res) => {
  const height = req.body.height;
  const width = req.body.width;
  const area = height * width;
  res.send(` Area is : ${area}`);
});

app.post("/circle", (req, res) => {
  const circle = req.body.circle;
  const circleArea = 2 * circle;
  res.send(`Circle area is : ${circleArea}`);
});

app.listen(PORT, () => {
  console.log(`server is running at : http://localhost:${PORT}`);
});
