import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionsListRelationFilter } from "../inputs/ActionsListRelationFilter";
import { AssigneesListRelationFilter } from "../inputs/AssigneesListRelationFilter";
import { CommentsListRelationFilter } from "../inputs/CommentsListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumStateFilter } from "../inputs/EnumStateFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("TasksWhereInput", {
  isAbstract: true
})
export class TasksWhereInput {
  @TypeGraphQL.Field(_type => [TasksWhereInput], {
    nullable: true
  })
  AND?: TasksWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TasksWhereInput], {
    nullable: true
  })
  OR?: TasksWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TasksWhereInput], {
    nullable: true
  })
  NOT?: TasksWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  ownerId?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  date?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => EnumStateFilter, {
    nullable: true
  })
  state?: EnumStateFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => CommentsListRelationFilter, {
    nullable: true
  })
  Comments?: CommentsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ActionsListRelationFilter, {
    nullable: true
  })
  Actions?: ActionsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => AssigneesListRelationFilter, {
    nullable: true
  })
  Assignees?: AssigneesListRelationFilter | undefined;
}
