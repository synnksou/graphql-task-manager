import * as TypeGraphQL from "type-graphql";
import { Action } from "../../../models/Action";
import { Assignee } from "../../../models/Assignee";
import { Comment } from "../../../models/Comment";
import { Task } from "../../../models/Task";
import { User } from "../../../models/User";
import { TaskActionsArgs } from "./args/TaskActionsArgs";
import { TaskAssigneesArgs } from "./args/TaskAssigneesArgs";
import { TaskCommentsArgs } from "./args/TaskCommentsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Task)
export class TaskRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async ownerId(@TypeGraphQL.Root() task: Task, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).task.findUnique({
      where: {
        id: task.id,
      },
    }).ownerId({});
  }

  @TypeGraphQL.FieldResolver(_type => [Comment], {
    nullable: false
  })
  async comments(@TypeGraphQL.Root() task: Task, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TaskCommentsArgs): Promise<Comment[]> {
    return getPrismaFromContext(ctx).task.findUnique({
      where: {
        id: task.id,
      },
    }).comments(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Action], {
    nullable: false
  })
  async actions(@TypeGraphQL.Root() task: Task, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TaskActionsArgs): Promise<Action[]> {
    return getPrismaFromContext(ctx).task.findUnique({
      where: {
        id: task.id,
      },
    }).actions(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Assignee], {
    nullable: false
  })
  async assignees(@TypeGraphQL.Root() task: Task, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TaskAssigneesArgs): Promise<Assignee[]> {
    return getPrismaFromContext(ctx).task.findUnique({
      where: {
        id: task.id,
      },
    }).assignees(args);
  }
}
