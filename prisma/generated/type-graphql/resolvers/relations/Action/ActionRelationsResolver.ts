import * as TypeGraphQL from "type-graphql";
import { Action } from "../../../models/Action";
import { Notification } from "../../../models/Notification";
import { Task } from "../../../models/Task";
import { ActionNotificationsArgs } from "./args/ActionNotificationsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Action)
export class ActionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Task, {
    nullable: false
  })
  async task(@TypeGraphQL.Root() action: Action, @TypeGraphQL.Ctx() ctx: any): Promise<Task> {
    return getPrismaFromContext(ctx).action.findUnique({
      where: {
        id: action.id,
      },
    }).task({});
  }

  @TypeGraphQL.FieldResolver(_type => [Notification], {
    nullable: false
  })
  async notifications(@TypeGraphQL.Root() action: Action, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ActionNotificationsArgs): Promise<Notification[]> {
    return getPrismaFromContext(ctx).action.findUnique({
      where: {
        id: action.id,
      },
    }).notifications(args);
  }
}
