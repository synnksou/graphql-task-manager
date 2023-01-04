import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionCreateWithoutNotificationsInput } from "../inputs/ActionCreateWithoutNotificationsInput";
import { ActionUpdateWithoutNotificationsInput } from "../inputs/ActionUpdateWithoutNotificationsInput";

@TypeGraphQL.InputType("ActionUpsertWithoutNotificationsInput", {
  isAbstract: true
})
export class ActionUpsertWithoutNotificationsInput {
  @TypeGraphQL.Field(_type => ActionUpdateWithoutNotificationsInput, {
    nullable: false
  })
  update!: ActionUpdateWithoutNotificationsInput;

  @TypeGraphQL.Field(_type => ActionCreateWithoutNotificationsInput, {
    nullable: false
  })
  create!: ActionCreateWithoutNotificationsInput;
}
