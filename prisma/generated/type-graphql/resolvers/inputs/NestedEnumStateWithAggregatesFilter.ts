import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumStateFilter } from "../inputs/NestedEnumStateFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { State } from "../../enums/State";

@TypeGraphQL.InputType("NestedEnumStateWithAggregatesFilter", {
  isAbstract: true
})
export class NestedEnumStateWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumStateWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumStateWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumStateFilter, {
    nullable: true
  })
  _min?: NestedEnumStateFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumStateFilter, {
    nullable: true
  })
  _max?: NestedEnumStateFilter | undefined;
}
