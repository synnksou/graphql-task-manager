import * as TypeGraphQL from "type-graphql";
import { Comments } from "../../../models/Comments";
import { Tasks } from "../../../models/Tasks";
import { User } from "../../../models/User";
import { CommentsChildrenArgs } from "./args/CommentsChildrenArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Comments)
export class CommentsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async User(@TypeGraphQL.Root() comments: Comments, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).comments.findUnique({
      where: {
        id: comments.id,
      },
    }).User({});
  }

  @TypeGraphQL.FieldResolver(_type => Tasks, {
    nullable: false
  })
  async Tasks(@TypeGraphQL.Root() comments: Comments, @TypeGraphQL.Ctx() ctx: any): Promise<Tasks> {
    return getPrismaFromContext(ctx).comments.findUnique({
      where: {
        id: comments.id,
      },
    }).Tasks({});
  }

  @TypeGraphQL.FieldResolver(_type => [Comments], {
    nullable: false
  })
  async children(@TypeGraphQL.Root() comments: Comments, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CommentsChildrenArgs): Promise<Comments[]> {
    return getPrismaFromContext(ctx).comments.findUnique({
      where: {
        id: comments.id,
      },
    }).children(args);
  }

  @TypeGraphQL.FieldResolver(_type => Comments, {
    nullable: true
  })
  async parent(@TypeGraphQL.Root() comments: Comments, @TypeGraphQL.Ctx() ctx: any): Promise<Comments | null> {
    return getPrismaFromContext(ctx).comments.findUnique({
      where: {
        id: comments.id,
      },
    }).parent({});
  }
}
