import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionListRelationFilter } from "../inputs/ActionListRelationFilter";
import { AssigneeListRelationFilter } from "../inputs/AssigneeListRelationFilter";
import { CommentListRelationFilter } from "../inputs/CommentListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumStateFilter } from "../inputs/EnumStateFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("TaskWhereInput", {
  isAbstract: true
})
export class TaskWhereInput {
  @TypeGraphQL.Field(_type => [TaskWhereInput], {
    nullable: true
  })
  AND?: TaskWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereInput], {
    nullable: true
  })
  OR?: TaskWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereInput], {
    nullable: true
  })
  NOT?: TaskWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => CommentListRelationFilter, {
    nullable: true
  })
  comments?: CommentListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ActionListRelationFilter, {
    nullable: true
  })
  actions?: ActionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => AssigneeListRelationFilter, {
    nullable: true
  })
  assignees?: AssigneeListRelationFilter | undefined;
}
