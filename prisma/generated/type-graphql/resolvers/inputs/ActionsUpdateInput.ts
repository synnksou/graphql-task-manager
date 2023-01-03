import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationsUpdateManyWithoutActionsNestedInput } from "../inputs/NotificationsUpdateManyWithoutActionsNestedInput";
import { NullableEnumNameFieldUpdateOperationsInput } from "../inputs/NullableEnumNameFieldUpdateOperationsInput";
import { NullableEnumTargetTypeFieldUpdateOperationsInput } from "../inputs/NullableEnumTargetTypeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TasksUpdateOneRequiredWithoutActionsNestedInput } from "../inputs/TasksUpdateOneRequiredWithoutActionsNestedInput";

@TypeGraphQL.InputType("ActionsUpdateInput", {
  isAbstract: true
})
export class ActionsUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableEnumNameFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableEnumNameFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TasksUpdateOneRequiredWithoutActionsNestedInput, {
    nullable: true
  })
  Tasks?: TasksUpdateOneRequiredWithoutActionsNestedInput | undefined;

  @TypeGraphQL.Field(_type => NullableEnumTargetTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  targetType?: NullableEnumTargetTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NotificationsUpdateManyWithoutActionsNestedInput, {
    nullable: true
  })
  Notifications?: NotificationsUpdateManyWithoutActionsNestedInput | undefined;
}
