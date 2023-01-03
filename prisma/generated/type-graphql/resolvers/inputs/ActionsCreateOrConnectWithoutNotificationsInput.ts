import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionsCreateWithoutNotificationsInput } from "../inputs/ActionsCreateWithoutNotificationsInput";
import { ActionsWhereUniqueInput } from "../inputs/ActionsWhereUniqueInput";

@TypeGraphQL.InputType("ActionsCreateOrConnectWithoutNotificationsInput", {
  isAbstract: true
})
export class ActionsCreateOrConnectWithoutNotificationsInput {
  @TypeGraphQL.Field(_type => ActionsWhereUniqueInput, {
    nullable: false
  })
  where!: ActionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ActionsCreateWithoutNotificationsInput, {
    nullable: false
  })
  create!: ActionsCreateWithoutNotificationsInput;
}
