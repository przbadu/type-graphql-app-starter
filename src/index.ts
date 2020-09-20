import "reflect-metadata";
import Express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";

import { RegisterResolver } from "./modules/user/Register";

const main = async () => {
  // create new connection from typeorm config file.
  await createConnection();

  // build schema with resolvers.
  const schema = await buildSchema({
    resolvers: [RegisterResolver],
  });

  // create apollo server with type-graphql schema
  const apolloServer = new ApolloServer({ schema });

  const app = Express();

  // setup express middleware in appoloServer
  apolloServer.applyMiddleware({ app });

  // start server in port 3000
  app.listen(3000, () =>
    console.log("Server started on http://localhost:3000/graphql")
  );
};

main();
