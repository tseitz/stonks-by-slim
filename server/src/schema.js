const { gql } = require("apollo-server");

const typeDefs = gql`
  type StockTop {
    symbol: String!
    sector: String
    securityType: String
    bidPrice: Int
    bidSize: Int
    askPrice: Int
    askSize: Int
    lastUpdated: String
    lastSalePrice: Float
    lastSaleSize: Int
    lastSaleTime: String
    volume: Int
  }

  type OBV {
    indicator: [Float]
    chart: [Chart]
  }

  type Chart {
    date: String
    open: Float
    close: Float
    high: Float
    low: Float
    volume: Int
    uOpen: Float
    uClose: Float
    uHigh: Float
    uLow: Float
    uVolume: Int
    change: Float
    changePercent: Float # TODO: ?
    label: String
    changeOverTime: Int # TODO: ?
  }

  type Quote {
    symbol: String
    companyName: String
    primaryExchange: String
    calculationPrice: String
    open: Float
    openTime: Int
    openSource: String
    close: Float
    closeTime: Int
    closeSource: String
    high: Float
    highTime: Int
    highSource: String
    low: Float
    lowTime: Int
    lowSource: String
    latestPrice: Float
    latestSource: String
    latestTime: String
    latestUpdate: Int
    latestVolume: Int
    iexRealtimePrice: Float
    iexRealtimeSize: Int
    iexLastUpdated: Int
    delayedPrice: Float
    delayedPriceTime: Int
    oddLotDelayedPrice: Float
    oddLotDelayedPriceTime: Int
    extendedPrice: Int
    extendedChange: Float
    extendedChangePercent: Float
    extendedPriceTime: Int
    previousClose: Float
    previousVolume: Int
    change: Float
    changePercent: Float
    volume: Int
    iexMarketPercent: Float
    iexVolume: Int
    avgTotalVolume: Int
    iexBidPrice: Int
    iexBidSize: Int
    iexAskPrice: Int
    iexAskSize: Int
    iexOpen: String
    iexOpenTime: String
    iexClose: Float
    iexCloseTime: Int
    marketCap: Int
    peRatio: Float
    week52High: Float
    week52Low: Float
    ytdChange: Float
    lastTradeTime: Int
    isUSMarketOpen: Boolean
  }

  type IntradayPrices {
    date: String
    minute: String
    label: String
    high: Float
    low: Float
    average: Float
    volume: Int
    notional: Float
    numberOfTrades: Int
    marketHigh: Float
    marketLow: Float
    marketAverage: Float
    marketVolume: Int
    marketNotional: Float
    marketNumberOfTrades: Int
    open: Float
    close: Float
    marketOpen: Float
    marketClose: Float
    changeOverTime: Float
    marketChangeOverTime: Float
  }

  type Query {
    getTop: OBV
  }
`;

module.exports = typeDefs;
