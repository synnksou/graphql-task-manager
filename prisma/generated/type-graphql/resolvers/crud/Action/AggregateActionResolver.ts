import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateActionArgs } from "./args/AggregateActionArgs";
import { Action } from "../../../models/Action";
import { AggregateAction } from "../../outputs/AggregateAction";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Action)
export class AggregateActionResolver {
  @TypeGraphQL.Query(_returns => AggregateAction, {
    nullable: false
  })
  async aggregateAction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateActionArgs): Promise<AggregateAction> {
    return getPrismaFromContext(ctx).action.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
