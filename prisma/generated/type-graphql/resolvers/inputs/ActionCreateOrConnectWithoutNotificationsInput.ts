import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionCreateWithoutNotificationsInput } from "../inputs/ActionCreateWithoutNotificationsInput";
import { ActionWhereUniqueInput } from "../inputs/ActionWhereUniqueInput";

@TypeGraphQL.InputType("ActionCreateOrConnectWithoutNotificationsInput", {
  isAbstract: true
})
export class ActionCreateOrConnectWithoutNotificationsInput {
  @TypeGraphQL.Field(_type => ActionWhereUniqueInput, {
    nullable: false
  })
  where!: ActionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ActionCreateWithoutNotificationsInput, {
    nullable: false
  })
  create!: ActionCreateWithoutNotificationsInput;
}
