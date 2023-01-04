import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateAssigneeArgs } from "./args/AggregateAssigneeArgs";
import { Assignee } from "../../../models/Assignee";
import { AggregateAssignee } from "../../outputs/AggregateAssignee";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Assignee)
export class AggregateAssigneeResolver {
  @TypeGraphQL.Query(_returns => AggregateAssignee, {
    nullable: false
  })
  async aggregateAssignee(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAssigneeArgs): Promise<AggregateAssignee> {
    return getPrismaFromContext(ctx).assignee.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
