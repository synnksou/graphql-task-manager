import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionsWhereInput } from "../inputs/ActionsWhereInput";

@TypeGraphQL.InputType("ActionsListRelationFilter", {
  isAbstract: true
})
export class ActionsListRelationFilter {
  @TypeGraphQL.Field(_type => ActionsWhereInput, {
    nullable: true
  })
  every?: ActionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ActionsWhereInput, {
    nullable: true
  })
  some?: ActionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ActionsWhereInput, {
    nullable: true
  })
  none?: ActionsWhereInput | undefined;
}
