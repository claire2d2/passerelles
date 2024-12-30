import "reflect-metadata";
import "module-alias/register";

import depthLimit from 'graphql-depth-limit';
import { ApolloServer } from '@apollo/server';
const { startServerAndCreateNextHandler } = require('@as-integrations/next');
import typeDefs from './typeDefs';
import resolvers from './resolvers';
import { datasource } from './lib/datasource';

// Create Apollo Server instance
export const server = new ApolloServer({
  typeDefs,
  resolvers,
  validationRules: [depthLimit(5)], // Prevent deep queries (n+1 issue)
});

export const handler = startServerAndCreateNextHandler(server, { path: "/api/graphql" });
