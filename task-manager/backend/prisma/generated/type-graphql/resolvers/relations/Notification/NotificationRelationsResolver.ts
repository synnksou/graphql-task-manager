import * as TypeGraphQL from "type-graphql";
import { Action } from "../../../models/Action";
import { Notification } from "../../../models/Notification";
import { User } from "../../../models/User";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Notification)
export class NotificationRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() notification: Notification, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).notification.findUnique({
      where: {
        id: notification.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Action, {
    nullable: false
  })
  async actions(@TypeGraphQL.Root() notification: Notification, @TypeGraphQL.Ctx() ctx: any): Promise<Action> {
    return getPrismaFromContext(ctx).notification.findUnique({
      where: {
        id: notification.id,
      },
    }).actions({});
  }
}
