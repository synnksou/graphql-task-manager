import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("NotificationScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class NotificationScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [NotificationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: NotificationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: NotificationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: NotificationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  readed_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  actionsId?: StringWithAggregatesFilter | undefined;
}
