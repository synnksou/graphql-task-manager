import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionUpdateManyWithoutTaskNestedInput } from "../inputs/ActionUpdateManyWithoutTaskNestedInput";
import { AssigneeUpdateManyWithoutTaskNestedInput } from "../inputs/AssigneeUpdateManyWithoutTaskNestedInput";
import { CommentUpdateManyWithoutTaskNestedInput } from "../inputs/CommentUpdateManyWithoutTaskNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumStateFieldUpdateOperationsInput } from "../inputs/EnumStateFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutTasksNestedInput } from "../inputs/UserUpdateOneWithoutTasksNestedInput";

@TypeGraphQL.InputType("TaskUpdateInput", {
  isAbstract: true
})
export class TaskUpdateInput {
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

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutTasksNestedInput, {
    nullable: true
  })
  ownerId?: UserUpdateOneWithoutTasksNestedInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  date?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumStateFieldUpdateOperationsInput, {
    nullable: true
  })
  state?: EnumStateFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateManyWithoutTaskNestedInput, {
    nullable: true
  })
  comments?: CommentUpdateManyWithoutTaskNestedInput | undefined;

  @TypeGraphQL.Field(_type => ActionUpdateManyWithoutTaskNestedInput, {
    nullable: true
  })
  actions?: ActionUpdateManyWithoutTaskNestedInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => AssigneeUpdateManyWithoutTaskNestedInput, {
    nullable: true
  })
  assignees?: AssigneeUpdateManyWithoutTaskNestedInput | undefined;
}
