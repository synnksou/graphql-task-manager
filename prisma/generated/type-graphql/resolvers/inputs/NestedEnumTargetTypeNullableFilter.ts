import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TargetType } from "../../enums/TargetType";

@TypeGraphQL.InputType("NestedEnumTargetTypeNullableFilter", {
  isAbstract: true
})
export class NestedEnumTargetTypeNullableFilter {
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
