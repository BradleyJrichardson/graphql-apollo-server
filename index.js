/// dependency imports
const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

/// relative imports
const { MONGODB } = require("./config.js");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log("mongo connected 😎");
    return server.listen({ port: 5000 });
  })
  .then(res => {
    console.log(`server running at ${res.url}`);
  });

/// run server with 'node index'
// crtl + enter to execute query
