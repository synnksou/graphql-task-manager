import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumTargetTypeNullableWithAggregatesFilter } from "../inputs/EnumTargetTypeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("CommentsScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class CommentsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CommentsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CommentsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CommentsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CommentsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumTargetTypeNullableWithAggregatesFilter, {
    nullable: true
  })
  targetType?: EnumTargetTypeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  parentId?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  content?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  ownerId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  tasksId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
