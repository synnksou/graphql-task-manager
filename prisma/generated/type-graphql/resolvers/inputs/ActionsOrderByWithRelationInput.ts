import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationsOrderByRelationAggregateInput } from "../inputs/NotificationsOrderByRelationAggregateInput";
import { TasksOrderByWithRelationInput } from "../inputs/TasksOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ActionsOrderByWithRelationInput", {
  isAbstract: true
})
export class ActionsOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TasksOrderByWithRelationInput, {
    nullable: true
  })
  Tasks?: TasksOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  targetType?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  targetId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => NotificationsOrderByRelationAggregateInput, {
    nullable: true
  })
  Notifications?: NotificationsOrderByRelationAggregateInput | undefined;
}
