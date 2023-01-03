import * as TypeGraphQL from "type-graphql";
import { Actions } from "../../../models/Actions";
import { Assignees } from "../../../models/Assignees";
import { Comments } from "../../../models/Comments";
import { Tasks } from "../../../models/Tasks";
import { User } from "../../../models/User";
import { TasksActionsArgs } from "./args/TasksActionsArgs";
import { TasksAssigneesArgs } from "./args/TasksAssigneesArgs";
import { TasksCommentsArgs } from "./args/TasksCommentsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tasks)
export class TasksRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async ownerId(@TypeGraphQL.Root() tasks: Tasks, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).tasks.findUnique({
      where: {
        id: tasks.id,
      },
    }).ownerId({});
  }

  @TypeGraphQL.FieldResolver(_type => [Comments], {
    nullable: false
  })
  async Comments(@TypeGraphQL.Root() tasks: Tasks, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TasksCommentsArgs): Promise<Comments[]> {
    return getPrismaFromContext(ctx).tasks.findUnique({
      where: {
        id: tasks.id,
      },
    }).Comments(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Actions], {
    nullable: false
  })
  async Actions(@TypeGraphQL.Root() tasks: Tasks, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TasksActionsArgs): Promise<Actions[]> {
    return getPrismaFromContext(ctx).tasks.findUnique({
      where: {
        id: tasks.id,
      },
    }).Actions(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Assignees], {
    nullable: false
  })
  async Assignees(@TypeGraphQL.Root() tasks: Tasks, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TasksAssigneesArgs): Promise<Assignees[]> {
    return getPrismaFromContext(ctx).tasks.findUnique({
      where: {
        id: tasks.id,
      },
    }).Assignees(args);
  }
}
