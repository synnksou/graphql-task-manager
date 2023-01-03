import * as TypeGraphQL from "type-graphql";
import { Actions } from "../../../models/Actions";
import { Notifications } from "../../../models/Notifications";
import { User } from "../../../models/User";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Notifications)
export class NotificationsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async User(@TypeGraphQL.Root() notifications: Notifications, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).notifications.findUnique({
      where: {
        id: notifications.id,
      },
    }).User({});
  }

  @TypeGraphQL.FieldResolver(_type => Actions, {
    nullable: false
  })
  async Actions(@TypeGraphQL.Root() notifications: Notifications, @TypeGraphQL.Ctx() ctx: any): Promise<Actions> {
    return getPrismaFromContext(ctx).notifications.findUnique({
      where: {
        id: notifications.id,
      },
    }).Actions({});
  }
}
