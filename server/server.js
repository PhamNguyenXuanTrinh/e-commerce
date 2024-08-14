const express = require("express");
const dbConnect = require("./src/configs/dbconnect");
const intiRouters = require("./src/routers");
require("dotenv").config();

app = express();

dbConnect();
const port = process.env.PORT || 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
intiRouters(app);


app.listen(port, () => {
  console.log("sever running on the port: " + port);
});
