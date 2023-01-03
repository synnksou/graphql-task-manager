import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksCountOrderByAggregateInput } from "../inputs/TasksCountOrderByAggregateInput";
import { TasksMaxOrderByAggregateInput } from "../inputs/TasksMaxOrderByAggregateInput";
import { TasksMinOrderByAggregateInput } from "../inputs/TasksMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TasksOrderByWithAggregationInput", {
  isAbstract: true
})
export class TasksOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  state?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TasksCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TasksCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TasksMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TasksMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TasksMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TasksMinOrderByAggregateInput | undefined;
}
