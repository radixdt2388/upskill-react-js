const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded());

app.post("/login", (req, res) => {
  if (req.body.username == "admin" && req.body.password == "123") {
    res.send({
      token: "test123",
      message: "Login successfully",
    });
  } else {
    res.send({
      message: "Invalid username and password",
    });
  }
});

app.use("/", (req, res) => {
  res.send("Hello Word!");
});

app.listen(3002, () => console.log("API is running on http://localhost:3002"));
