import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutNotificationsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutNotificationsNestedInput";

@TypeGraphQL.InputType("NotificationUpdateWithoutActionsInput", {
  isAbstract: true
})
export class NotificationUpdateWithoutActionsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutNotificationsNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutNotificationsNestedInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  readed_at?: DateTimeFieldUpdateOperationsInput | undefined;
}
