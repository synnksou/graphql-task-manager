import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumStateFilter } from "../inputs/NestedEnumStateFilter";
import { State } from "../../enums/State";

@TypeGraphQL.InputType("EnumStateFilter", {
  isAbstract: true
})
export class EnumStateFilter {
  @TypeGraphQL.Field(_type => State, {
    nullable: true
  })
  equals?: "CREATED" | "PROGRESS" | "FINISHED" | undefined;

  @TypeGraphQL.Field(_type => [State], {
    nullable: true
  })
  in?: Array<"CREATED" | "PROGRESS" | "FINISHED"> | undefined;

  @TypeGraphQL.Field(_type => [State], {
    nullable: true
  })
  notIn?: Array<"CREATED" | "PROGRESS" | "FINISHED"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumStateFilter, {
    nullable: true
  })
  not?: NestedEnumStateFilter | undefined;
}
