import * as TypeGraphQL from "type-graphql";
import { Assignees } from "../../../models/Assignees";
import { Tasks } from "../../../models/Tasks";
import { User } from "../../../models/User";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Assignees)
export class AssigneesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async User(@TypeGraphQL.Root() assignees: Assignees, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).assignees.findUnique({
      where: {
        id: assignees.id,
      },
    }).User({});
  }

  @TypeGraphQL.FieldResolver(_type => Tasks, {
    nullable: false
  })
  async Tasks(@TypeGraphQL.Root() assignees: Assignees, @TypeGraphQL.Ctx() ctx: any): Promise<Tasks> {
    return getPrismaFromContext(ctx).assignees.findUnique({
      where: {
        id: assignees.id,
      },
    }).Tasks({});
  }
}
