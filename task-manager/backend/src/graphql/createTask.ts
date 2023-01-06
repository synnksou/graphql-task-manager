import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Task, User } from '../../prisma/generated/type-graphql';
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { formatISO } from 'date-fns';

@Resolver()
export class CreateTaskResolver {
  @Mutation(() => Task)
  async createTask(
    @Arg('title') title: string,
    @Arg('description') description: string,
    @Arg('email') email: string,
  ): Promise<Task> {
    const prisma = new PrismaClient();

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    const date = formatISO(new Date());

    const task = await prisma.task.create({
      data: {
        date: date,
        description: description,
        state: 'CREATED',
        title: title,
        userId: user.id,
      },
    });

    return task;
  }
}
