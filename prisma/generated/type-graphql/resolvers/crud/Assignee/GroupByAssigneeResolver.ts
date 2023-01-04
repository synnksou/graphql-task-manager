import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByAssigneeArgs } from "./args/GroupByAssigneeArgs";
import { Assignee } from "../../../models/Assignee";
import { AssigneeGroupBy } from "../../outputs/AssigneeGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Assignee)
export class GroupByAssigneeResolver {
  @TypeGraphQL.Query(_returns => [AssigneeGroupBy], {
    nullable: false
  })
  async groupByAssignee(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByAssigneeArgs): Promise<AssigneeGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).assignee.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
