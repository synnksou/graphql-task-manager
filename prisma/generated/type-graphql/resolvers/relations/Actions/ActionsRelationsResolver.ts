import * as TypeGraphQL from "type-graphql";
import { Actions } from "../../../models/Actions";
import { Notifications } from "../../../models/Notifications";
import { Tasks } from "../../../models/Tasks";
import { ActionsNotificationsArgs } from "./args/ActionsNotificationsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Actions)
export class ActionsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Tasks, {
    nullable: false
  })
  async Tasks(@TypeGraphQL.Root() actions: Actions, @TypeGraphQL.Ctx() ctx: any): Promise<Tasks> {
    return getPrismaFromContext(ctx).actions.findUnique({
      where: {
        id: actions.id,
      },
    }).Tasks({});
  }

  @TypeGraphQL.FieldResolver(_type => [Notifications], {
    nullable: false
  })
  async Notifications(@TypeGraphQL.Root() actions: Actions, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ActionsNotificationsArgs): Promise<Notifications[]> {
    return getPrismaFromContext(ctx).actions.findUnique({
      where: {
        id: actions.id,
      },
    }).Notifications(args);
  }
}
