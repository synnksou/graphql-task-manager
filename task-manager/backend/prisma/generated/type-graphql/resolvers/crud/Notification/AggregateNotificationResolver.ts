import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateNotificationArgs } from "./args/AggregateNotificationArgs";
import { Notification } from "../../../models/Notification";
import { AggregateNotification } from "../../outputs/AggregateNotification";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Notification)
export class AggregateNotificationResolver {
  @TypeGraphQL.Query(_returns => AggregateNotification, {
    nullable: false
  })
  async aggregateNotification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateNotificationArgs): Promise<AggregateNotification> {
    return getPrismaFromContext(ctx).notification.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
