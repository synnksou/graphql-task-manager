import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationsCreateWithoutActionsInput } from "../inputs/NotificationsCreateWithoutActionsInput";
import { NotificationsWhereUniqueInput } from "../inputs/NotificationsWhereUniqueInput";

@TypeGraphQL.InputType("NotificationsCreateOrConnectWithoutActionsInput", {
  isAbstract: true
})
export class NotificationsCreateOrConnectWithoutActionsInput {
  @TypeGraphQL.Field(_type => NotificationsWhereUniqueInput, {
    nullable: false
  })
  where!: NotificationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => NotificationsCreateWithoutActionsInput, {
    nullable: false
  })
  create!: NotificationsCreateWithoutActionsInput;
}
