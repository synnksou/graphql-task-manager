import * as TypeGraphQL from "type-graphql";
import { Assignee } from "../../../models/Assignee";
import { Comment } from "../../../models/Comment";
import { Notification } from "../../../models/Notification";
import { Task } from "../../../models/Task";
import { User } from "../../../models/User";
import { UserAssigneesArgs } from "./args/UserAssigneesArgs";
import { UserCommentsArgs } from "./args/UserCommentsArgs";
import { UserNotificationsArgs } from "./args/UserNotificationsArgs";
import { UserTaskssArgs } from "./args/UserTaskssArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Task], {
    nullable: false
  })
  async taskss(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserTaskssArgs): Promise<Task[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).taskss(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Comment], {
    nullable: false
  })
  async comments(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserCommentsArgs): Promise<Comment[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).comments(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Notification], {
    nullable: false
  })
  async notifications(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserNotificationsArgs): Promise<Notification[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).notifications(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Assignee], {
    nullable: false
  })
  async assignees(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserAssigneesArgs): Promise<Assignee[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).assignees(args);
  }
}
