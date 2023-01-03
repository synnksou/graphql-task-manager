import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsUpdateManyWithoutParentNestedInput } from "../inputs/CommentsUpdateManyWithoutParentNestedInput";
import { CommentsUpdateOneWithoutChildrenNestedInput } from "../inputs/CommentsUpdateOneWithoutChildrenNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableEnumTargetTypeFieldUpdateOperationsInput } from "../inputs/NullableEnumTargetTypeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TasksUpdateOneRequiredWithoutCommentsNestedInput } from "../inputs/TasksUpdateOneRequiredWithoutCommentsNestedInput";

@TypeGraphQL.InputType("CommentsUpdateWithoutUserInput", {
  isAbstract: true
})
export class CommentsUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TasksUpdateOneRequiredWithoutCommentsNestedInput, {
    nullable: true
  })
  Tasks?: TasksUpdateOneRequiredWithoutCommentsNestedInput | undefined;

  @TypeGraphQL.Field(_type => NullableEnumTargetTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  targetType?: NullableEnumTargetTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CommentsUpdateManyWithoutParentNestedInput, {
    nullable: true
  })
  children?: CommentsUpdateManyWithoutParentNestedInput | undefined;

  @TypeGraphQL.Field(_type => CommentsUpdateOneWithoutChildrenNestedInput, {
    nullable: true
  })
  parent?: CommentsUpdateOneWithoutChildrenNestedInput | undefined;

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
