import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneesCountOrderByAggregateInput } from "../inputs/AssigneesCountOrderByAggregateInput";
import { AssigneesMaxOrderByAggregateInput } from "../inputs/AssigneesMaxOrderByAggregateInput";
import { AssigneesMinOrderByAggregateInput } from "../inputs/AssigneesMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AssigneesOrderByWithAggregationInput", {
  isAbstract: true
})
export class AssigneesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tasksId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AssigneesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: AssigneesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AssigneesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: AssigneesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AssigneesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: AssigneesMinOrderByAggregateInput | undefined;
}
