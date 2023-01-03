import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Name } from "../../enums/Name";

@TypeGraphQL.InputType("NullableEnumNameFieldUpdateOperationsInput", {
  isAbstract: true
})
export class NullableEnumNameFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => Name, {
    nullable: true
  })
  set?: "ADD" | "UPDATE" | "REMOVE" | undefined;
}
