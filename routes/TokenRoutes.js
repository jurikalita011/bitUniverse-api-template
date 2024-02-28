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

TokenRouter.get("/", async (req, res) => {
  try {
    const { page, limit } = req.query;
    if (!page) page = 1;
    const tokenData = await TokenModel.find()
      .skip((page - 1) * 60)
      .limit(limit);
    res.status(200).send({ data: tokenData });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "No token data found", err: error.message });
  }
});

module.exports = TokenRouter;
