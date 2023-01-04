import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionWhereInput } from "../inputs/ActionWhereInput";

@TypeGraphQL.InputType("ActionListRelationFilter", {
  isAbstract: true
})
export class ActionListRelationFilter {
  @TypeGraphQL.Field(_type => ActionWhereInput, {
    nullable: true
  })
  every?: ActionWhereInput | undefined;

  @TypeGraphQL.Field(_type => ActionWhereInput, {
    nullable: true
  })
  some?: ActionWhereInput | undefined;

  @TypeGraphQL.Field(_type => ActionWhereInput, {
    nullable: true
  })
  none?: ActionWhereInput | undefined;
}
