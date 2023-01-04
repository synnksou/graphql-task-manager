import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionCreateNestedOneWithoutNotificationsInput } from "../inputs/ActionCreateNestedOneWithoutNotificationsInput";

@TypeGraphQL.InputType("NotificationCreateWithoutUserInput", {
  isAbstract: true
})
export class NotificationCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => ActionCreateNestedOneWithoutNotificationsInput, {
    nullable: false
  })
  actions!: ActionCreateNestedOneWithoutNotificationsInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  readed_at!: Date;
}
