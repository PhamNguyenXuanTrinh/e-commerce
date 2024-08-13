const express = require("express");
const dbConnect = require("./src/configs/dbconnect")
require("dotenv").config();

app = express();


dbConnect()
const port = process.env.PORT || 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", (req, res) => {
  res.send("running");
});
app.listen(port, () => {
  console.log("sever running on the port: "+ port);
});
