import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionsCreateNestedOneWithoutNotificationsInput } from "../inputs/ActionsCreateNestedOneWithoutNotificationsInput";

@TypeGraphQL.InputType("NotificationsCreateWithoutUserInput", {
  isAbstract: true
})
export class NotificationsCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => ActionsCreateNestedOneWithoutNotificationsInput, {
    nullable: false
  })
  Actions!: ActionsCreateNestedOneWithoutNotificationsInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  readed_at!: Date;
}
