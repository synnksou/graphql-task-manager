import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneAssigneeArgs } from "./args/UpdateOneAssigneeArgs";
import { Assignee } from "../../../models/Assignee";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Assignee)
export class UpdateOneAssigneeResolver {
  @TypeGraphQL.Mutation(_returns => Assignee, {
    nullable: true
  })
  async updateOneAssignee(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneAssigneeArgs): Promise<Assignee | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).assignee.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
