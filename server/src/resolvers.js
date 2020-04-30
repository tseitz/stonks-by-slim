module.exports = {
  Query: {
    getTop: (_, __, { dataSources }) => dataSources.iexApi.getTop(),
  },
};
