import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionsCreateOrConnectWithoutNotificationsInput } from "../inputs/ActionsCreateOrConnectWithoutNotificationsInput";
import { ActionsCreateWithoutNotificationsInput } from "../inputs/ActionsCreateWithoutNotificationsInput";
import { ActionsUpdateWithoutNotificationsInput } from "../inputs/ActionsUpdateWithoutNotificationsInput";
import { ActionsUpsertWithoutNotificationsInput } from "../inputs/ActionsUpsertWithoutNotificationsInput";
import { ActionsWhereUniqueInput } from "../inputs/ActionsWhereUniqueInput";

@TypeGraphQL.InputType("ActionsUpdateOneRequiredWithoutNotificationsNestedInput", {
  isAbstract: true
})
export class ActionsUpdateOneRequiredWithoutNotificationsNestedInput {
  @TypeGraphQL.Field(_type => ActionsCreateWithoutNotificationsInput, {
    nullable: true
  })
  create?: ActionsCreateWithoutNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => ActionsCreateOrConnectWithoutNotificationsInput, {
    nullable: true
  })
  connectOrCreate?: ActionsCreateOrConnectWithoutNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => ActionsUpsertWithoutNotificationsInput, {
    nullable: true
  })
  upsert?: ActionsUpsertWithoutNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => ActionsWhereUniqueInput, {
    nullable: true
  })
  connect?: ActionsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ActionsUpdateWithoutNotificationsInput, {
    nullable: true
  })
  update?: ActionsUpdateWithoutNotificationsInput | undefined;
}
