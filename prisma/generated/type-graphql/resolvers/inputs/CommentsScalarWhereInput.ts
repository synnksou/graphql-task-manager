import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumTargetTypeNullableFilter } from "../inputs/EnumTargetTypeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("CommentsScalarWhereInput", {
  isAbstract: true
})
export class CommentsScalarWhereInput {
  @TypeGraphQL.Field(_type => [CommentsScalarWhereInput], {
    nullable: true
  })
  AND?: CommentsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsScalarWhereInput], {
    nullable: true
  })
  OR?: CommentsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsScalarWhereInput], {
    nullable: true
  })
  NOT?: CommentsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumTargetTypeNullableFilter, {
    nullable: true
  })
  targetType?: EnumTargetTypeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  parentId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  content?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  ownerId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  tasksId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
