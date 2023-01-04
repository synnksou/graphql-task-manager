import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { User } from '../../prisma/generated/type-graphql';
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { formatISO } from 'date-fns';


@Resolver()
export class SignInResolver {
  @Mutation(() => User)
  async signUp(
    @Arg('email') email: string,
    @Arg('passwordDigest') passwordDigest: string,
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(passwordDigest, 12);
    const prisma = new PrismaClient();

    const user = await prisma.user.findUnique(
        {
            where:{
                email
            }
        }
    )
    
    if(!!user){
        throw new Error(" No User")
    }

    if(user?.password_digest !== hashedPassword){
        throw new Error("Error password")
    }

    return user ;
  }
}