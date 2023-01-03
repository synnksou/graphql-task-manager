import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumTargetTypeNullableFilter } from "../inputs/NestedEnumTargetTypeNullableFilter";
import { TargetType } from "../../enums/TargetType";

@TypeGraphQL.InputType("EnumTargetTypeNullableFilter", {
  isAbstract: true
})
export class EnumTargetTypeNullableFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumTargetTypeNullableFilter, {
    nullable: true
  })
  not?: NestedEnumTargetTypeNullableFilter | undefined;
}
