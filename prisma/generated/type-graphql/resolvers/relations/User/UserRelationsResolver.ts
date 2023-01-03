import * as TypeGraphQL from "type-graphql";
import { Assignees } from "../../../models/Assignees";
import { Comments } from "../../../models/Comments";
import { Notifications } from "../../../models/Notifications";
import { Tasks } from "../../../models/Tasks";
import { User } from "../../../models/User";
import { UserAssigneesArgs } from "./args/UserAssigneesArgs";
import { UserCommentsArgs } from "./args/UserCommentsArgs";
import { UserNotificationsArgs } from "./args/UserNotificationsArgs";
import { UserTasksArgs } from "./args/UserTasksArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Tasks], {
    nullable: false
  })
  async Tasks(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserTasksArgs): Promise<Tasks[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).Tasks(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Comments], {
    nullable: false
  })
  async Comments(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserCommentsArgs): Promise<Comments[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).Comments(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Notifications], {
    nullable: false
  })
  async Notifications(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserNotificationsArgs): Promise<Notifications[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).Notifications(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Assignees], {
    nullable: false
  })
  async Assignees(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserAssigneesArgs): Promise<Assignees[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).Assignees(args);
  }
}
