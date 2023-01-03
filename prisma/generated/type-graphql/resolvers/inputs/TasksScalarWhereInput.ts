import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumStateFilter } from "../inputs/EnumStateFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("TasksScalarWhereInput", {
  isAbstract: true
})
export class TasksScalarWhereInput {
  @TypeGraphQL.Field(_type => [TasksScalarWhereInput], {
    nullable: true
  })
  AND?: TasksScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TasksScalarWhereInput], {
    nullable: true
  })
  OR?: TasksScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TasksScalarWhereInput], {
    nullable: true
  })
  NOT?: TasksScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
