import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsListRelationFilter } from "../inputs/CommentsListRelationFilter";
import { CommentsRelationFilter } from "../inputs/CommentsRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumTargetTypeNullableFilter } from "../inputs/EnumTargetTypeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TasksRelationFilter } from "../inputs/TasksRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("CommentsWhereInput", {
  isAbstract: true
})
export class CommentsWhereInput {
  @TypeGraphQL.Field(_type => [CommentsWhereInput], {
    nullable: true
  })
  AND?: CommentsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsWhereInput], {
    nullable: true
  })
  OR?: CommentsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsWhereInput], {
    nullable: true
  })
  NOT?: CommentsWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => EnumTargetTypeNullableFilter, {
    nullable: true
  })
  targetType?: EnumTargetTypeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => CommentsListRelationFilter, {
    nullable: true
  })
  children?: CommentsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CommentsRelationFilter, {
    nullable: true
  })
  parent?: CommentsRelationFilter | undefined;

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
