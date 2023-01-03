import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateAssigneesArgs } from "./args/AggregateAssigneesArgs";
import { Assignees } from "../../../models/Assignees";
import { AggregateAssignees } from "../../outputs/AggregateAssignees";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Assignees)
export class AggregateAssigneesResolver {
  @TypeGraphQL.Query(_returns => AggregateAssignees, {
    nullable: false
  })
  async aggregateAssignees(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAssigneesArgs): Promise<AggregateAssignees> {
    return getPrismaFromContext(ctx).assignees.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
