import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateCommentsArgs } from "./args/AggregateCommentsArgs";
import { Comments } from "../../../models/Comments";
import { AggregateComments } from "../../outputs/AggregateComments";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Comments)
export class AggregateCommentsResolver {
  @TypeGraphQL.Query(_returns => AggregateComments, {
    nullable: false
  })
  async aggregateComments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCommentsArgs): Promise<AggregateComments> {
    return getPrismaFromContext(ctx).comments.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
