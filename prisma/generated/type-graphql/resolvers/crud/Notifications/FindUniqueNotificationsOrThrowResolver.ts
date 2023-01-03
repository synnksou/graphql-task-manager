import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueNotificationsOrThrowArgs } from "./args/FindUniqueNotificationsOrThrowArgs";
import { Notifications } from "../../../models/Notifications";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Notifications)
export class FindUniqueNotificationsOrThrowResolver {
  @TypeGraphQL.Query(_returns => Notifications, {
    nullable: true
  })
  async findUniqueNotificationsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueNotificationsOrThrowArgs): Promise<Notifications | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).notifications.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
