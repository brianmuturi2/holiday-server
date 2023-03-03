const resolvers = require("./resolvers");
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

const server = new ApolloServer({
    resolvers,
    typeDefs
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
