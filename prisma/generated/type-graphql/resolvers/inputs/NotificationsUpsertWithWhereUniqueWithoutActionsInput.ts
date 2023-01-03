import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationsCreateWithoutActionsInput } from "../inputs/NotificationsCreateWithoutActionsInput";
import { NotificationsUpdateWithoutActionsInput } from "../inputs/NotificationsUpdateWithoutActionsInput";
import { NotificationsWhereUniqueInput } from "../inputs/NotificationsWhereUniqueInput";

@TypeGraphQL.InputType("NotificationsUpsertWithWhereUniqueWithoutActionsInput", {
  isAbstract: true
})
export class NotificationsUpsertWithWhereUniqueWithoutActionsInput {
  @TypeGraphQL.Field(_type => NotificationsWhereUniqueInput, {
    nullable: false
  })
  where!: NotificationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => NotificationsUpdateWithoutActionsInput, {
    nullable: false
  })
  update!: NotificationsUpdateWithoutActionsInput;

  @TypeGraphQL.Field(_type => NotificationsCreateWithoutActionsInput, {
    nullable: false
  })
  create!: NotificationsCreateWithoutActionsInput;
}
