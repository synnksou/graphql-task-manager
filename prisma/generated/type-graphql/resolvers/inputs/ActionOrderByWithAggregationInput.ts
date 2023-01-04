import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionCountOrderByAggregateInput } from "../inputs/ActionCountOrderByAggregateInput";
import { ActionMaxOrderByAggregateInput } from "../inputs/ActionMaxOrderByAggregateInput";
import { ActionMinOrderByAggregateInput } from "../inputs/ActionMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ActionOrderByWithAggregationInput", {
  isAbstract: true
})
export class ActionOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  targetType?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  targetId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ActionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ActionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ActionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ActionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ActionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ActionMinOrderByAggregateInput | undefined;
}
