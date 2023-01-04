import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumNameNullableFilter } from "../inputs/NestedEnumNameNullableFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
import { Name } from "../../enums/Name";

@TypeGraphQL.InputType("NestedEnumNameNullableWithAggregatesFilter", {
  isAbstract: true
})
export class NestedEnumNameNullableWithAggregatesFilter {
  @TypeGraphQL.Field(_type => Name, {
    nullable: true
  })
  equals?: "ADD" | "UPDATE" | "REMOVE" | undefined;

  @TypeGraphQL.Field(_type => [Name], {
    nullable: true
  })
  in?: Array<"ADD" | "UPDATE" | "REMOVE"> | undefined;

  @TypeGraphQL.Field(_type => [Name], {
    nullable: true
  })
  notIn?: Array<"ADD" | "UPDATE" | "REMOVE"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumNameNullableWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumNameNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntNullableFilter, {
    nullable: true
  })
  _count?: NestedIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumNameNullableFilter, {
    nullable: true
  })
  _min?: NestedEnumNameNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumNameNullableFilter, {
    nullable: true
  })
  _max?: NestedEnumNameNullableFilter | undefined;
}
