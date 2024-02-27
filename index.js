const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connection = require("./db");
const tokenRouter = require("./routes/TokenRoutes");

const app = express();
app.use(express.json());

app.use(cors());
app.use("/tokens", tokenRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("connected");
  } catch (error) {
    console.log(error.message);
  }
  console.log("running at 7000");
});
