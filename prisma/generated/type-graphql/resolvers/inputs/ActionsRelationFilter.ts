import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionsWhereInput } from "../inputs/ActionsWhereInput";

@TypeGraphQL.InputType("ActionsRelationFilter", {
  isAbstract: true
})
export class ActionsRelationFilter {
  @TypeGraphQL.Field(_type => ActionsWhereInput, {
    nullable: true
  })
  is?: ActionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ActionsWhereInput, {
    nullable: true
  })
  isNot?: ActionsWhereInput | undefined;
}
