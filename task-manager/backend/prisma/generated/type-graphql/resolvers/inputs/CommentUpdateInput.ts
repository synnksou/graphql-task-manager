import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentUpdateManyWithoutParentNestedInput } from "../inputs/CommentUpdateManyWithoutParentNestedInput";
import { CommentUpdateOneWithoutChildrenNestedInput } from "../inputs/CommentUpdateOneWithoutChildrenNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableEnumTargetTypeFieldUpdateOperationsInput } from "../inputs/NullableEnumTargetTypeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateOneRequiredWithoutCommentsNestedInput } from "../inputs/TaskUpdateOneRequiredWithoutCommentsNestedInput";
import { UserUpdateOneWithoutCommentsNestedInput } from "../inputs/UserUpdateOneWithoutCommentsNestedInput";

@TypeGraphQL.InputType("CommentUpdateInput", {
  isAbstract: true
})
export class CommentUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutCommentsNestedInput, {
    nullable: true
  })
  owner?: UserUpdateOneWithoutCommentsNestedInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateOneRequiredWithoutCommentsNestedInput, {
    nullable: true
  })
  task?: TaskUpdateOneRequiredWithoutCommentsNestedInput | undefined;

  @TypeGraphQL.Field(_type => NullableEnumTargetTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  targetType?: NullableEnumTargetTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateManyWithoutParentNestedInput, {
    nullable: true
  })
  children?: CommentUpdateManyWithoutParentNestedInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateOneWithoutChildrenNestedInput, {
    nullable: true
  })
  parent?: CommentUpdateOneWithoutChildrenNestedInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  content?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
