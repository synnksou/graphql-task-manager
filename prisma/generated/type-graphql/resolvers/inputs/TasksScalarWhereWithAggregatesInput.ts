import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumStateWithAggregatesFilter } from "../inputs/EnumStateWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("TasksScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class TasksScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TasksScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TasksScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TasksScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TasksScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TasksScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TasksScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  title?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  description?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  date?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumStateWithAggregatesFilter, {
    nullable: true
  })
  state?: EnumStateWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
