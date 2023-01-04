import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";
import { TaskRelationFilter } from "../inputs/TaskRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("AssigneeWhereInput", {
  isAbstract: true
})
export class AssigneeWhereInput {
  @TypeGraphQL.Field(_type => [AssigneeWhereInput], {
    nullable: true
  })
  AND?: AssigneeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneeWhereInput], {
    nullable: true
  })
  OR?: AssigneeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneeWhereInput], {
    nullable: true
  })
  NOT?: AssigneeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TaskRelationFilter, {
    nullable: true
  })
  task?: TaskRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  taskId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;
}
