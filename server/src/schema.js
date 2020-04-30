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

  type Query {
    getTop: OBV
  }
`;

module.exports = typeDefs;
