const mongoose = require("mongoose");

const tokenSchema = mongoose.Schema({
  img: { type: String },
  tokenName: { type: String },
  symbol: { type: String },
  decimals: { type: Number },
  marketcap: { type: Number },
  chain: { type: String },
});

const TokenModel = mongoose.model("token", tokenSchema);

module.exports = TokenModel;
