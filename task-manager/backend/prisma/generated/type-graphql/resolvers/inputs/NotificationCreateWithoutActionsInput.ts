import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutNotificationsInput } from "../inputs/UserCreateNestedOneWithoutNotificationsInput";

@TypeGraphQL.InputType("NotificationCreateWithoutActionsInput", {
  isAbstract: true
})
export class NotificationCreateWithoutActionsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutNotificationsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutNotificationsInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  readed_at!: Date;
}
