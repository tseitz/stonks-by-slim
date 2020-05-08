const { RESTDataSource } = require("apollo-datasource-rest");

class IEXApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL =
      "https://sandbox.iexapis.com/stable/stock/aapl/indicator/obv"; // sandbox
    // this.baseURL = `https://cloud.iexapis.com/stable/stock/aapl/indicator/obv`; // production
  }

  async getTop() {
    const response = await this.get("", {
      token: process.env["STONKS_API_KEY"],
    });

    return this.topReducer(response);
  }

  topReducer(stock) {
    console.log(stock);
    return {
      indicator: stock.indicator,
      chart: stock.chart,
      // date: stock.date,
      // open: stock.open,
      // close: stock.close,
      // high: stock.high,
      // low: stock.low,
      // volume: stock.volume,
      // uOpen: stock.uOpen,
      // uClose: stock.uClose,
      // uHigh: stock.uHigh,
      // uLow: stock.uLow,
      // uVolume: stock.uVolume,
      // change: stock.change,
      // changePercent: stock.changePercent,
      // label: stock.label,
      // changeOverTime: stock.changeOverTime,
    };
  }
}

module.exports = IEXApi;
