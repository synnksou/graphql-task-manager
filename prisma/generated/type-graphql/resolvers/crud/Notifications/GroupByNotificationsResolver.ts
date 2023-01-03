import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByNotificationsArgs } from "./args/GroupByNotificationsArgs";
import { Notifications } from "../../../models/Notifications";
import { NotificationsGroupBy } from "../../outputs/NotificationsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Notifications)
export class GroupByNotificationsResolver {
  @TypeGraphQL.Query(_returns => [NotificationsGroupBy], {
    nullable: false
  })
  async groupByNotifications(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByNotificationsArgs): Promise<NotificationsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).notifications.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
