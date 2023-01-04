import * as TypeGraphQL from "type-graphql";
import { Comment } from "../../../models/Comment";
import { Task } from "../../../models/Task";
import { User } from "../../../models/User";
import { CommentChildrenArgs } from "./args/CommentChildrenArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Comment)
export class CommentRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async owner(@TypeGraphQL.Root() comment: Comment, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).comment.findUnique({
      where: {
        id: comment.id,
      },
    }).owner({});
  }

  @TypeGraphQL.FieldResolver(_type => Task, {
    nullable: false
  })
  async task(@TypeGraphQL.Root() comment: Comment, @TypeGraphQL.Ctx() ctx: any): Promise<Task> {
    return getPrismaFromContext(ctx).comment.findUnique({
      where: {
        id: comment.id,
      },
    }).task({});
  }

  @TypeGraphQL.FieldResolver(_type => [Comment], {
    nullable: false
  })
  async children(@TypeGraphQL.Root() comment: Comment, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CommentChildrenArgs): Promise<Comment[]> {
    return getPrismaFromContext(ctx).comment.findUnique({
      where: {
        id: comment.id,
      },
    }).children(args);
  }

  @TypeGraphQL.FieldResolver(_type => Comment, {
    nullable: true
  })
  async parent(@TypeGraphQL.Root() comment: Comment, @TypeGraphQL.Ctx() ctx: any): Promise<Comment | null> {
    return getPrismaFromContext(ctx).comment.findUnique({
      where: {
        id: comment.id,
      },
    }).parent({});
  }
}
