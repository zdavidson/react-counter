const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res, next) => {
  res.send(path.join(__dirname, "/public/index.html"));
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`We are listening on ${PORT}`);
});
