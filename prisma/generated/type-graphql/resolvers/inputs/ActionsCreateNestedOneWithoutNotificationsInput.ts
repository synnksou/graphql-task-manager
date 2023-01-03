import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionsCreateOrConnectWithoutNotificationsInput } from "../inputs/ActionsCreateOrConnectWithoutNotificationsInput";
import { ActionsCreateWithoutNotificationsInput } from "../inputs/ActionsCreateWithoutNotificationsInput";
import { ActionsWhereUniqueInput } from "../inputs/ActionsWhereUniqueInput";

@TypeGraphQL.InputType("ActionsCreateNestedOneWithoutNotificationsInput", {
  isAbstract: true
})
export class ActionsCreateNestedOneWithoutNotificationsInput {
  @TypeGraphQL.Field(_type => ActionsCreateWithoutNotificationsInput, {
    nullable: true
  })
  create?: ActionsCreateWithoutNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => ActionsCreateOrConnectWithoutNotificationsInput, {
    nullable: true
  })
  connectOrCreate?: ActionsCreateOrConnectWithoutNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => ActionsWhereUniqueInput, {
    nullable: true
  })
  connect?: ActionsWhereUniqueInput | undefined;
}
