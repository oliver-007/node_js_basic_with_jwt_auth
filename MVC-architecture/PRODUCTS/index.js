const express = require("express");
const app = express();
const porductsRouter = require("./routes/products.route");
const PORT = 6001;

app.use(express.urlencoded({ extended: true }));

app.use(porductsRouter);

app.listen(PORT, () => {
  console.log(`server is running at : http://localhost:${PORT}`);
});
