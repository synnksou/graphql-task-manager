import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationsCreateWithoutUserInput } from "../inputs/NotificationsCreateWithoutUserInput";
import { NotificationsWhereUniqueInput } from "../inputs/NotificationsWhereUniqueInput";

@TypeGraphQL.InputType("NotificationsCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class NotificationsCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => NotificationsWhereUniqueInput, {
    nullable: false
  })
  where!: NotificationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => NotificationsCreateWithoutUserInput, {
    nullable: false
  })
  create!: NotificationsCreateWithoutUserInput;
}
