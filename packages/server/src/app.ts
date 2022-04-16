import { Neo4jGraphQL } from '@neo4j/graphql';
import { ApolloServer, gql } from 'apollo-server';
import { GraphQLSchema } from 'graphql';

import loader from './loaders/loader';

const typeDefs = gql`
  type Movie {
    title: String!
    year: Int
    plot: String
    actors: [Person!]! @relationship(type: "ACTED_IN", direction: IN)
  }

  type Person {
    name: String!
    movies: [Movie!]! @relationship(type: "ACTED_IN", direction: OUT)
  }
`;

class Server {
  constructor() {
    loader();
    const neoSchema = new Neo4jGraphQL({ typeDefs, driver: Driver });
    neoSchema.getSchema().then((schema: GraphQLSchema) => {
      this.startServer(new ApolloServer({ schema }));
    });
  }

  private startServer(server: ApolloServer) {
    server.listen().then(({ url }) => {
      Logger.info(`🚀  Server ready at ${url}`);
    });
  }
}

new Server();
