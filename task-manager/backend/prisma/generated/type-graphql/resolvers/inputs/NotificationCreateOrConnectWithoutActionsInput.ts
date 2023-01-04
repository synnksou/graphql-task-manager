import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCreateWithoutActionsInput } from "../inputs/NotificationCreateWithoutActionsInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";

@TypeGraphQL.InputType("NotificationCreateOrConnectWithoutActionsInput", {
  isAbstract: true
})
export class NotificationCreateOrConnectWithoutActionsInput {
  @TypeGraphQL.Field(_type => NotificationWhereUniqueInput, {
    nullable: false
  })
  where!: NotificationWhereUniqueInput;

  @TypeGraphQL.Field(_type => NotificationCreateWithoutActionsInput, {
    nullable: false
  })
  create!: NotificationCreateWithoutActionsInput;
}
