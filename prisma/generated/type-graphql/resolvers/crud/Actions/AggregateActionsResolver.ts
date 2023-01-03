import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateActionsArgs } from "./args/AggregateActionsArgs";
import { Actions } from "../../../models/Actions";
import { AggregateActions } from "../../outputs/AggregateActions";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Actions)
export class AggregateActionsResolver {
  @TypeGraphQL.Query(_returns => AggregateActions, {
    nullable: false
  })
  async aggregateActions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateActionsArgs): Promise<AggregateActions> {
    return getPrismaFromContext(ctx).actions.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
