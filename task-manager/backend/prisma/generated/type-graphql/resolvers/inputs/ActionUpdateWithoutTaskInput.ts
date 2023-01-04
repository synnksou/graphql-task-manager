import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationUpdateManyWithoutActionsNestedInput } from "../inputs/NotificationUpdateManyWithoutActionsNestedInput";
import { NullableEnumNameFieldUpdateOperationsInput } from "../inputs/NullableEnumNameFieldUpdateOperationsInput";
import { NullableEnumTargetTypeFieldUpdateOperationsInput } from "../inputs/NullableEnumTargetTypeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ActionUpdateWithoutTaskInput", {
  isAbstract: true
})
export class ActionUpdateWithoutTaskInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableEnumNameFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableEnumNameFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableEnumTargetTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  targetType?: NullableEnumTargetTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NotificationUpdateManyWithoutActionsNestedInput, {
    nullable: true
  })
  notifications?: NotificationUpdateManyWithoutActionsNestedInput | undefined;
}
