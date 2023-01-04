import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumNameNullableFilter } from "../inputs/EnumNameNullableFilter";
import { EnumTargetTypeNullableFilter } from "../inputs/EnumTargetTypeNullableFilter";
import { NotificationListRelationFilter } from "../inputs/NotificationListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TaskRelationFilter } from "../inputs/TaskRelationFilter";

@TypeGraphQL.InputType("ActionWhereInput", {
  isAbstract: true
})
export class ActionWhereInput {
  @TypeGraphQL.Field(_type => [ActionWhereInput], {
    nullable: true
  })
  AND?: ActionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionWhereInput], {
    nullable: true
  })
  OR?: ActionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionWhereInput], {
    nullable: true
  })
  NOT?: ActionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumNameNullableFilter, {
    nullable: true
  })
  name?: EnumNameNullableFilter | undefined;

  @TypeGraphQL.Field(_type => TaskRelationFilter, {
    nullable: true
  })
  task?: TaskRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EnumTargetTypeNullableFilter, {
    nullable: true
  })
  targetType?: EnumTargetTypeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  targetId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => NotificationListRelationFilter, {
    nullable: true
  })
  notifications?: NotificationListRelationFilter | undefined;
}
