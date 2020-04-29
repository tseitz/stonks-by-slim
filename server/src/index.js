require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const IEXApi = require("./datasources/iex");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    iexApi: new IEXApi(),
  }),
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
