import { Arg, Mutation, Resolver } from 'type-graphql';
import { Comment } from '../../prisma/generated/type-graphql';
import { PrismaClient } from '@prisma/client';

@Resolver()
export class AddCommentTaskResolver {
  @Mutation(() => Comment)
  async commentTaskUser(
    @Arg('userId') userId: string,
    @Arg('taskId') taskId: string,
    @Arg('content') content: string,
  ): Promise<Comment> {
    const prisma = new PrismaClient();

    const comment = await prisma.comment.create({
      data: {
        ownerId: userId,
        taskId,
        content,
      },
    });

    return comment;
  }
}
