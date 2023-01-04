import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutAssigneesNestedInput } from "../inputs/UserUpdateOneRequiredWithoutAssigneesNestedInput";

@TypeGraphQL.InputType("AssigneeUpdateWithoutTaskInput", {
  isAbstract: true
})
export class AssigneeUpdateWithoutTaskInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutAssigneesNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutAssigneesNestedInput | undefined;
}
