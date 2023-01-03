import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";
import { TasksRelationFilter } from "../inputs/TasksRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("AssigneesWhereInput", {
  isAbstract: true
})
export class AssigneesWhereInput {
  @TypeGraphQL.Field(_type => [AssigneesWhereInput], {
    nullable: true
  })
  AND?: AssigneesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneesWhereInput], {
    nullable: true
  })
  OR?: AssigneesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneesWhereInput], {
    nullable: true
  })
  NOT?: AssigneesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  User?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TasksRelationFilter, {
    nullable: true
  })
  Tasks?: TasksRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  tasksId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;
}
