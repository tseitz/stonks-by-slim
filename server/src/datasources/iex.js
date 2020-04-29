const { RESTDataSource } = require("apollo-datasource-rest");

class IEXApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `https://cloud.iexapis.com/v1/`;
  }

  async getStrategies() {
    const response = await this.get("stock", {
      symbol: "AAPL",
      token: process.env["STONKS_API_KEY"],
    });

    return Array.isArray(response)
      ? response.map((strat) => this.strategyReducer(strat))
      : [];
  }

  strategyReducer(strat) {
    return {
      strategyId: strat.strategy_id,
      name: strat.name,
      description: strat.description,
      lastTestNum: strat.last_test_num,
    };
  }
}

module.exports = IEXApi;
