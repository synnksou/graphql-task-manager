import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateOneRequiredWithoutAssigneesNestedInput } from "../inputs/TaskUpdateOneRequiredWithoutAssigneesNestedInput";
import { UserUpdateOneRequiredWithoutAssigneesNestedInput } from "../inputs/UserUpdateOneRequiredWithoutAssigneesNestedInput";

@TypeGraphQL.InputType("AssigneeUpdateInput", {
  isAbstract: true
})
export class AssigneeUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutAssigneesNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutAssigneesNestedInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateOneRequiredWithoutAssigneesNestedInput, {
    nullable: true
  })
  task?: TaskUpdateOneRequiredWithoutAssigneesNestedInput | undefined;
}
