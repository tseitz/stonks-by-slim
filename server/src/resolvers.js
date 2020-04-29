module.exports = {
  Query: {
    getStrategies: (_, __, { dataSources }) =>
      dataSources.iexApi.getStrategies(),
  },
};
