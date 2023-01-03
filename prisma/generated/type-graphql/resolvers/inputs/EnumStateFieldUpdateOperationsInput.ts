import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { State } from "../../enums/State";

@TypeGraphQL.InputType("EnumStateFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumStateFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => State, {
    nullable: true
  })
  set?: "CREATED" | "PROGRESS" | "FINISHED" | undefined;
}
