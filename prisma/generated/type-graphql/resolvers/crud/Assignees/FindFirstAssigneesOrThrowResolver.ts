import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstAssigneesOrThrowArgs } from "./args/FindFirstAssigneesOrThrowArgs";
import { Assignees } from "../../../models/Assignees";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Assignees)
export class FindFirstAssigneesOrThrowResolver {
  @TypeGraphQL.Query(_returns => Assignees, {
    nullable: true
  })
  async findFirstAssigneesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstAssigneesOrThrowArgs): Promise<Assignees | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).assignees.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
