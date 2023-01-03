import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TargetType } from "../../enums/TargetType";

@TypeGraphQL.InputType("NullableEnumTargetTypeFieldUpdateOperationsInput", {
  isAbstract: true
})
export class NullableEnumTargetTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => TargetType, {
    nullable: true
  })
  set?: "TASK" | undefined;
}
