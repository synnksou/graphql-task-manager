import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstNotificationOrThrowArgs } from "./args/FindFirstNotificationOrThrowArgs";
import { Notification } from "../../../models/Notification";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Notification)
export class FindFirstNotificationOrThrowResolver {
  @TypeGraphQL.Query(_returns => Notification, {
    nullable: true
  })
  async findFirstNotificationOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstNotificationOrThrowArgs): Promise<Notification | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).notification.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
