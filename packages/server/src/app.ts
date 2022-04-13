import { ApolloServer, gql } from 'apollo-server';

import loader from './loaders/loader';

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

class Server {
  private server: ApolloServer;
  constructor() {
    this.server = new ApolloServer({ typeDefs, resolvers });

    new Promise((resolve) => {
      resolve(loader());
    }).then(() => {
      this.startServer(this.server);
    });
  }

  private startServer(server: ApolloServer) {
    server.listen().then(({ url }) => {
      Logger.info(`🚀  Server ready at ${url}`);
    });
  }
}

new Server();
