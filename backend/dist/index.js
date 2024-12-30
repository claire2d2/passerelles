"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("module-alias/register");
const graphql_depth_limit_1 = __importDefault(require("graphql-depth-limit"));
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const typeDefs_1 = __importDefault(require("./typeDefs"));
const resolvers_1 = __importDefault(require("./resolvers"));
const datasource_1 = require("./lib/datasource");
const server = new server_1.ApolloServer({
    typeDefs: typeDefs_1.default,
    resolvers: resolvers_1.default,
    validationRules: [(0, graphql_depth_limit_1.default)(5)] //n+1
});
async function main() {
    const { url } = await (0, standalone_1.startStandaloneServer)(server, {
        listen: { port: 4000 },
    });
    await datasource_1.datasource.initialize(); //initialisation de la base de données
    console.log(`🚀  Server ready at: ${url}`);
}
main();
// import express from "express";
// import adsRouter from "./routes/ads.routes";
// import categoriesRouter from "./routes/categories.routes";
// import tagsRouter from "./routes/tags.routes";
// import datasource from "./lib/datasource";
// import cors from "cors";
// import path from "path";
// const app = express();
// app.use(cors({ origin: ["http://localhost:5173"] })); // on autorise le front à communiquer avec notre back
// app.use(express.json());
// app.use("/uploads", express.static(path.join(__dirname, "..", "uploads"))); // on expose à l'extérieur notre dossier uploads (http://localhost:4000/uploads)
// app.use("/ads", adsRouter);
// app.use("/categories", categoriesRouter);
// app.use("/tags", tagsRouter);
// app.listen(4000, async () => {
//   await datasource.initialize(); //initialisation de la base de données
//   console.log("Le serveur est lancé sur le port 4000");
// });
