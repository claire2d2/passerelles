import { ApolloServer } from "@apollo/server";
const { startServerAndCreateNextHandler } = require('@as-integrations/next');
import typeDefs from "../src/typeDefs";
import resolvers from "../src/resolvers";


const server = new ApolloServer({ typeDefs, resolvers });

// Export the handler to process requests
module.exports = startServerAndCreateNextHandler(server);
