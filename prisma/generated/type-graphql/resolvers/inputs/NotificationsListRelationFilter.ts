import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationsWhereInput } from "../inputs/NotificationsWhereInput";

@TypeGraphQL.InputType("NotificationsListRelationFilter", {
  isAbstract: true
})
export class NotificationsListRelationFilter {
  @TypeGraphQL.Field(_type => NotificationsWhereInput, {
    nullable: true
  })
  every?: NotificationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => NotificationsWhereInput, {
    nullable: true
  })
  some?: NotificationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => NotificationsWhereInput, {
    nullable: true
  })
  none?: NotificationsWhereInput | undefined;
}
