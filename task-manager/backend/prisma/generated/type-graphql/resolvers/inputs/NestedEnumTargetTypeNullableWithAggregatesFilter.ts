import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumTargetTypeNullableFilter } from "../inputs/NestedEnumTargetTypeNullableFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
import { TargetType } from "../../enums/TargetType";

@TypeGraphQL.InputType("NestedEnumTargetTypeNullableWithAggregatesFilter", {
  isAbstract: true
})
export class NestedEnumTargetTypeNullableWithAggregatesFilter {
  @TypeGraphQL.Field(_type => TargetType, {
    nullable: true
  })
  equals?: "TASK" | undefined;

  @TypeGraphQL.Field(_type => [TargetType], {
    nullable: true
  })
  in?: "TASK"[] | undefined;

  @TypeGraphQL.Field(_type => [TargetType], {
    nullable: true
  })
  notIn?: "TASK"[] | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTargetTypeNullableWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumTargetTypeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntNullableFilter, {
    nullable: true
  })
  _count?: NestedIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTargetTypeNullableFilter, {
    nullable: true
  })
  _min?: NestedEnumTargetTypeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTargetTypeNullableFilter, {
    nullable: true
  })
  _max?: NestedEnumTargetTypeNullableFilter | undefined;
}
