import { Arg, Mutation, Resolver } from 'type-graphql';
import { Assignee } from '../../prisma/generated/type-graphql';
import { PrismaClient } from '@prisma/client';
import { find } from 'lodash';
import { GraphQLError } from 'graphql';

@Resolver()
export class AssigneeTaskToUserResolver {
  @Mutation(() => Assignee)
  async assigneeTask(
    @Arg('userId') userId: string,
    @Arg('taskId') taskId: string,
  ): Promise<Assignee> {
    const prisma = new PrismaClient();

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        assignees: true,
      },
    });

    if (find(user.assignees, { taskId })) {
      throw new GraphQLError(
        'Cette utilisateur est deja assigné a cette tache',
      );
    }

    const assignee = await prisma.assignee.create({
      data: {
        userId,
        taskId,
      },
    });

    return assignee;
  }
}
