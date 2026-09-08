const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Github Action");
});

app.get("/help", (req, res) => {
  res.send("This is the help page");
});

if (require.main === module) {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
}

module.exports = app;
