import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TasksUpdateOneRequiredWithoutAssigneesNestedInput } from "../inputs/TasksUpdateOneRequiredWithoutAssigneesNestedInput";

@TypeGraphQL.InputType("AssigneesUpdateWithoutUserInput", {
  isAbstract: true
})
export class AssigneesUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TasksUpdateOneRequiredWithoutAssigneesNestedInput, {
    nullable: true
  })
  Tasks?: TasksUpdateOneRequiredWithoutAssigneesNestedInput | undefined;
}
