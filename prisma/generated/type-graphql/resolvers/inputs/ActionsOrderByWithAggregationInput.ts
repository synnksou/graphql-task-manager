import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionsCountOrderByAggregateInput } from "../inputs/ActionsCountOrderByAggregateInput";
import { ActionsMaxOrderByAggregateInput } from "../inputs/ActionsMaxOrderByAggregateInput";
import { ActionsMinOrderByAggregateInput } from "../inputs/ActionsMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ActionsOrderByWithAggregationInput", {
  isAbstract: true
})
export class ActionsOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => ActionsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ActionsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ActionsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ActionsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ActionsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ActionsMinOrderByAggregateInput | undefined;
}
