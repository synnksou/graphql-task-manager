import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneesListRelationFilter } from "../inputs/AssigneesListRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { CommentsListRelationFilter } from "../inputs/CommentsListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { JsonFilter } from "../inputs/JsonFilter";
import { NotificationsListRelationFilter } from "../inputs/NotificationsListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TasksListRelationFilter } from "../inputs/TasksListRelationFilter";

@TypeGraphQL.InputType("UserWhereInput", {
  isAbstract: true
})
export class UserWhereInput {
  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  AND?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  OR?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  NOT?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  password_digest?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  active?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => JsonFilter, {
    nullable: true
  })
  preferences?: JsonFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  last_sign_in_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => TasksListRelationFilter, {
    nullable: true
  })
  Tasks?: TasksListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CommentsListRelationFilter, {
    nullable: true
  })
  Comments?: CommentsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => NotificationsListRelationFilter, {
    nullable: true
  })
  Notifications?: NotificationsListRelationFilter | undefined;

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
