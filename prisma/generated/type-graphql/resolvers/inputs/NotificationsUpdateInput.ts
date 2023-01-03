import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionsUpdateOneRequiredWithoutNotificationsNestedInput } from "../inputs/ActionsUpdateOneRequiredWithoutNotificationsNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutNotificationsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutNotificationsNestedInput";

@TypeGraphQL.InputType("NotificationsUpdateInput", {
  isAbstract: true
})
export class NotificationsUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutNotificationsNestedInput, {
    nullable: true
  })
  User?: UserUpdateOneRequiredWithoutNotificationsNestedInput | undefined;

  @TypeGraphQL.Field(_type => ActionsUpdateOneRequiredWithoutNotificationsNestedInput, {
    nullable: true
  })
  Actions?: ActionsUpdateOneRequiredWithoutNotificationsNestedInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  readed_at?: DateTimeFieldUpdateOperationsInput | undefined;
}
