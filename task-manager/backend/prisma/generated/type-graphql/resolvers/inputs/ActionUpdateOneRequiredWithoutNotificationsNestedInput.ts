import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionCreateOrConnectWithoutNotificationsInput } from "../inputs/ActionCreateOrConnectWithoutNotificationsInput";
import { ActionCreateWithoutNotificationsInput } from "../inputs/ActionCreateWithoutNotificationsInput";
import { ActionUpdateWithoutNotificationsInput } from "../inputs/ActionUpdateWithoutNotificationsInput";
import { ActionUpsertWithoutNotificationsInput } from "../inputs/ActionUpsertWithoutNotificationsInput";
import { ActionWhereUniqueInput } from "../inputs/ActionWhereUniqueInput";

@TypeGraphQL.InputType("ActionUpdateOneRequiredWithoutNotificationsNestedInput", {
  isAbstract: true
})
export class ActionUpdateOneRequiredWithoutNotificationsNestedInput {
  @TypeGraphQL.Field(_type => ActionCreateWithoutNotificationsInput, {
    nullable: true
  })
  create?: ActionCreateWithoutNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => ActionCreateOrConnectWithoutNotificationsInput, {
    nullable: true
  })
  connectOrCreate?: ActionCreateOrConnectWithoutNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => ActionUpsertWithoutNotificationsInput, {
    nullable: true
  })
  upsert?: ActionUpsertWithoutNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => ActionWhereUniqueInput, {
    nullable: true
  })
  connect?: ActionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ActionUpdateWithoutNotificationsInput, {
    nullable: true
  })
  update?: ActionUpdateWithoutNotificationsInput | undefined;
}
