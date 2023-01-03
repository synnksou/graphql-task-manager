import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneAssigneesArgs } from "./args/UpsertOneAssigneesArgs";
import { Assignees } from "../../../models/Assignees";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Assignees)
export class UpsertOneAssigneesResolver {
  @TypeGraphQL.Mutation(_returns => Assignees, {
    nullable: false
  })
  async upsertOneAssignees(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneAssigneesArgs): Promise<Assignees> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).assignees.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
