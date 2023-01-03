import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionsCreateWithoutNotificationsInput } from "../inputs/ActionsCreateWithoutNotificationsInput";
import { ActionsUpdateWithoutNotificationsInput } from "../inputs/ActionsUpdateWithoutNotificationsInput";

@TypeGraphQL.InputType("ActionsUpsertWithoutNotificationsInput", {
  isAbstract: true
})
export class ActionsUpsertWithoutNotificationsInput {
  @TypeGraphQL.Field(_type => ActionsUpdateWithoutNotificationsInput, {
    nullable: false
  })
  update!: ActionsUpdateWithoutNotificationsInput;

  @TypeGraphQL.Field(_type => ActionsCreateWithoutNotificationsInput, {
    nullable: false
  })
  create!: ActionsCreateWithoutNotificationsInput;
}
