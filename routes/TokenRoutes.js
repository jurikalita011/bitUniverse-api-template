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
    let { page, limit } = req.query;

    page = +page || 1;
    limit = +limit || 10;

    const skip = (page - 1) * limit;
    const tokenData = await TokenModel.find().skip(skip).limit(limit);
    const total = await TokenModel.countDocuments();

    res.status(200).send({ data: tokenData, total });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ msg: "Error fetching token data", err: error.message });
  }
});

module.exports = TokenRouter;
