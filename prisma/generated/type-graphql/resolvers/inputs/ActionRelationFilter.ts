import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionWhereInput } from "../inputs/ActionWhereInput";

@TypeGraphQL.InputType("ActionRelationFilter", {
  isAbstract: true
})
export class ActionRelationFilter {
  @TypeGraphQL.Field(_type => ActionWhereInput, {
    nullable: true
  })
  is?: ActionWhereInput | undefined;

  @TypeGraphQL.Field(_type => ActionWhereInput, {
    nullable: true
  })
  isNot?: ActionWhereInput | undefined;
}
