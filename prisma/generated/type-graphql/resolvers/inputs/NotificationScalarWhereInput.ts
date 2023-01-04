import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("NotificationScalarWhereInput", {
  isAbstract: true
})
export class NotificationScalarWhereInput {
  @TypeGraphQL.Field(_type => [NotificationScalarWhereInput], {
    nullable: true
  })
  AND?: NotificationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationScalarWhereInput], {
    nullable: true
  })
  OR?: NotificationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationScalarWhereInput], {
    nullable: true
  })
  NOT?: NotificationScalarWhereInput[] | undefined;

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
