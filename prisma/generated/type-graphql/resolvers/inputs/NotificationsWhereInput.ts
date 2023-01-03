import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionsRelationFilter } from "../inputs/ActionsRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("NotificationsWhereInput", {
  isAbstract: true
})
export class NotificationsWhereInput {
  @TypeGraphQL.Field(_type => [NotificationsWhereInput], {
    nullable: true
  })
  AND?: NotificationsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationsWhereInput], {
    nullable: true
  })
  OR?: NotificationsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationsWhereInput], {
    nullable: true
  })
  NOT?: NotificationsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  User?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ActionsRelationFilter, {
    nullable: true
  })
  Actions?: ActionsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  readed_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  actionsId?: StringFilter | undefined;
}
