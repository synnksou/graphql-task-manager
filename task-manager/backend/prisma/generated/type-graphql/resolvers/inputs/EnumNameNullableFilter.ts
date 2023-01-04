import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumNameNullableFilter } from "../inputs/NestedEnumNameNullableFilter";
import { Name } from "../../enums/Name";

@TypeGraphQL.InputType("EnumNameNullableFilter", {
  isAbstract: true
})
export class EnumNameNullableFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumNameNullableFilter, {
    nullable: true
  })
  not?: NestedEnumNameNullableFilter | undefined;
}
