const express = require("express");
const taapi = require("taapi");

const app = express();
const port = 3000;
const apiKey = process.env.API_KEY;

// Setup client with authentication
const exchangeData = taapi.exchangeData(tapsec.secret);

app.get("/", async (req, res) => {
  const res1 = await exchangeData.getCandles(
    "binance",
    "BTC/USDT",
    "1m",
    0,
    100
  );
  console.log(res1);
  // const res2 = await client
  //   .getIndicator("rsi", "binance", "BTC/USDT", "1m", {
  //     chart: "heikinashi",
  //   });
  // res.send(res2);
  res.send(res1);
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
