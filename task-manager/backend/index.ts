import 'reflect-metadata';
import * as TypeGraphQL from 'type-graphql';
import { ApolloServer } from 'apollo-server';
import { PrismaClient } from '@prisma/client';
import { WebSocketServer } from 'ws';

import { useServer } from 'graphql-ws/lib/use/ws';
import { resolvers as generatedResolvers } from './prisma/generated/type-graphql';
import { SignUpResolver as signUpResolver } from './src/graphql/userAdd';
import { SignInResolver as signInResolver } from './src/graphql/userAuth';
import { CreateTaskResolver as createTaskResolver } from './src/graphql/createTask';
import { AssigneeTaskToUserResolver as assigneeTask } from './src/graphql/addAssignee';
import { AddCommentTaskResolver as addCommentTaskResolver } from './src/graphql/commentTask';
import { RedisPubSub } from 'graphql-redis-subscriptions';

interface Context {
  prisma: PrismaClient;
}

const pubSub = new RedisPubSub({
  messageEventName: 'messageBuffer',
  pmessageEventName: 'pmessageBuffer',
});

/* class SubscriptionResolver {
  @TypeGraphQL.Subscription({
    topics: ["NOTIFICATIONS", "ERRORS"],
    subscribe: () => pubSub.asyncIterator('NOTIFICATIONS'),
  })
  hello(): String {
    return 'hello';
  };
}
 */
const resolvers = [
  ...generatedResolvers,
  signUpResolver,
  signInResolver,
  createTaskResolver,
  assigneeTask,
  addCommentTaskResolver,
  /*   SubscriptionResolver, */
] as TypeGraphQL.NonEmptyArray<Function>;

async function main() {
  const schema = await TypeGraphQL.buildSchema({
    resolvers,
    pubSub,
    emitSchemaFile: './generated-schema.graphql',
    validate: false,
  });

  const prisma = new PrismaClient();
  const server = new ApolloServer({
    schema,
    context: (): Context => ({ prisma }),
    introspection: true,
    cors: {
      origin: ['http://localhost:8000', 'https://studio.apollographql.com'],
      credentials: true,
    },
  });
  const wsServer = new WebSocketServer({
    server: server.httpServer,
    path: '/subscriptions',
  });
  const serverCleanup = useServer({ schema }, wsServer);

  const { port } = await server.listen(4000);
  console.log(`GraphQL is listening on ${port}!`);
}

main().catch(console.error);
