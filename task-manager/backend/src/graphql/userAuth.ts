import { Arg, Mutation, Resolver } from 'type-graphql';
import { User } from '../../prisma/generated/type-graphql';
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

@Resolver()
export class SignInResolver {
  @Mutation(() => User)
  async signIn(
    @Arg('email') email: string,
    @Arg('password') password: string,
  ): Promise<User> {
    const prisma = new PrismaClient();
    const errorMessage = 'Un problème est survenue';
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!Boolean(user)) {
      throw new Error(errorMessage);
    }

    const match = await bcrypt.compare(password, user.password_digest);

    if (!match) {
      throw new Error(errorMessage);
    }

    return user;
  }
}
