import "reflect-metadata";
import "module-alias/register";

import depthLimit from 'graphql-depth-limit'
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import {datasource} from "./lib/datasource";


export const server = new ApolloServer<{}>({
  typeDefs,
  resolvers,
  validationRules: [depthLimit(5)] //n+1
});
async function main() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    
  });
  await datasource.initialize(); //initialisation de la base de données
  console.log(`🚀  Server ready at: ${url}`);
}
main();
