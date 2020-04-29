const { gql } = require("apollo-server");

const typeDefs = gql`
  type DefaultStrategies {
    strategyId: ID!
    name: String
    description: String
    lastTestNum: Int
  }

  type Query {
    getStrategies: [DefaultStrategies]
  }
`;

module.exports = typeDefs;
