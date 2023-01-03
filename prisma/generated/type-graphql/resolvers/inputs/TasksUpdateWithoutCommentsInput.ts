import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionsUpdateManyWithoutTasksNestedInput } from "../inputs/ActionsUpdateManyWithoutTasksNestedInput";
import { AssigneesUpdateManyWithoutTasksNestedInput } from "../inputs/AssigneesUpdateManyWithoutTasksNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumStateFieldUpdateOperationsInput } from "../inputs/EnumStateFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutTasksNestedInput } from "../inputs/UserUpdateOneRequiredWithoutTasksNestedInput";

@TypeGraphQL.InputType("TasksUpdateWithoutCommentsInput", {
  isAbstract: true
})
export class TasksUpdateWithoutCommentsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutTasksNestedInput, {
    nullable: true
  })
  ownerId?: UserUpdateOneRequiredWithoutTasksNestedInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  date?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumStateFieldUpdateOperationsInput, {
    nullable: true
  })
  state?: EnumStateFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ActionsUpdateManyWithoutTasksNestedInput, {
    nullable: true
  })
  Actions?: ActionsUpdateManyWithoutTasksNestedInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => AssigneesUpdateManyWithoutTasksNestedInput, {
    nullable: true
  })
  Assignees?: AssigneesUpdateManyWithoutTasksNestedInput | undefined;
}
