import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateNotificationsArgs } from "./args/AggregateNotificationsArgs";
import { Notifications } from "../../../models/Notifications";
import { AggregateNotifications } from "../../outputs/AggregateNotifications";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Notifications)
export class AggregateNotificationsResolver {
  @TypeGraphQL.Query(_returns => AggregateNotifications, {
    nullable: false
  })
  async aggregateNotifications(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateNotificationsArgs): Promise<AggregateNotifications> {
    return getPrismaFromContext(ctx).notifications.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
