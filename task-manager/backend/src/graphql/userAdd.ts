import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { User } from '../../prisma/generated/type-graphql';
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { formatISO } from 'date-fns';
import {GraphQLError} from "graphql/error";

@Resolver()
export class SignUpResolver {
  @Mutation(() => User)
  async signUp(
    @Arg('email') email: string,
    @Arg('password_digest') password_digest: string,
    @Arg('name') name: string,
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password_digest, 12);
    const prisma = new PrismaClient();

    const date = formatISO(new Date());

    try {
      const user = await prisma.user.create({
        data: {
          email,
          password_digest: hashedPassword,
          name,
          active: false,
          preferences: {},
          last_sign_in_at: date,
        },
      });
      return user;
    }catch(exception){
      console.log("error", exception);
      throw new GraphQLError("User already exists");
    }

  }
}
