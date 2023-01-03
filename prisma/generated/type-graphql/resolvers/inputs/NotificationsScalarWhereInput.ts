import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("NotificationsScalarWhereInput", {
  isAbstract: true
})
export class NotificationsScalarWhereInput {
  @TypeGraphQL.Field(_type => [NotificationsScalarWhereInput], {
    nullable: true
  })
  AND?: NotificationsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationsScalarWhereInput], {
    nullable: true
  })
  OR?: NotificationsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationsScalarWhereInput], {
    nullable: true
  })
  NOT?: NotificationsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

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
