import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationsCountOrderByAggregateInput } from "../inputs/NotificationsCountOrderByAggregateInput";
import { NotificationsMaxOrderByAggregateInput } from "../inputs/NotificationsMaxOrderByAggregateInput";
import { NotificationsMinOrderByAggregateInput } from "../inputs/NotificationsMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("NotificationsOrderByWithAggregationInput", {
  isAbstract: true
})
export class NotificationsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  readed_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  actionsId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => NotificationsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: NotificationsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NotificationsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: NotificationsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NotificationsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: NotificationsMinOrderByAggregateInput | undefined;
}
