import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumNameNullableFilter } from "../inputs/EnumNameNullableFilter";
import { EnumTargetTypeNullableFilter } from "../inputs/EnumTargetTypeNullableFilter";
import { NotificationsListRelationFilter } from "../inputs/NotificationsListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TasksRelationFilter } from "../inputs/TasksRelationFilter";

@TypeGraphQL.InputType("ActionsWhereInput", {
  isAbstract: true
})
export class ActionsWhereInput {
  @TypeGraphQL.Field(_type => [ActionsWhereInput], {
    nullable: true
  })
  AND?: ActionsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionsWhereInput], {
    nullable: true
  })
  OR?: ActionsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionsWhereInput], {
    nullable: true
  })
  NOT?: ActionsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumNameNullableFilter, {
    nullable: true
  })
  name?: EnumNameNullableFilter | undefined;

  @TypeGraphQL.Field(_type => TasksRelationFilter, {
    nullable: true
  })
  Tasks?: TasksRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EnumTargetTypeNullableFilter, {
    nullable: true
  })
  targetType?: EnumTargetTypeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  targetId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => NotificationsListRelationFilter, {
    nullable: true
  })
  Notifications?: NotificationsListRelationFilter | undefined;
}
