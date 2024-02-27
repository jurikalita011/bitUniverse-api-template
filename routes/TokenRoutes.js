const express = require("express");
const TokenRouter = express.Router();
const TokenModel = require("../model/TokenModel");

TokenRouter.post("/add", async (req, res) => {
  try {
    const { img, tokenName, symbol, decimals, marketcap, chain } = req.body;
    const tokenData = await TokenModel.create(req.body);
    res.status(200).send(tokenData);
  } catch (error) {
    res.status(500).send({ msg: "Unable to add token", err: error.message });
  }
});

TokenRouter.get("/get", async (req, res) => {
  try {
    const token = await TokenModel.find();
    res.status(200).send(token);
  } catch (error) {
    res
      .status(500)
      .send({ msg: "Unable to get any token data", err: error.message });
  }
});

module.exports = TokenRouter;
