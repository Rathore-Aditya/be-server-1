const express = require("express");
const app = express();

app.use("/", (req, res) => {
  res.json("Hello World !");
});

app.listen(8080, () => console.log("Running on port 8080"));
