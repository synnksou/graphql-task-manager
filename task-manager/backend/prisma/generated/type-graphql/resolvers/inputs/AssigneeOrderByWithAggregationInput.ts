import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneeCountOrderByAggregateInput } from "../inputs/AssigneeCountOrderByAggregateInput";
import { AssigneeMaxOrderByAggregateInput } from "../inputs/AssigneeMaxOrderByAggregateInput";
import { AssigneeMinOrderByAggregateInput } from "../inputs/AssigneeMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AssigneeOrderByWithAggregationInput", {
  isAbstract: true
})
export class AssigneeOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  taskId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AssigneeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: AssigneeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AssigneeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: AssigneeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AssigneeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: AssigneeMinOrderByAggregateInput | undefined;
}
