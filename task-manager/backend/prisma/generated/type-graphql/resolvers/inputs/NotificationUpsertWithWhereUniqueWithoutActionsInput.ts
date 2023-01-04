import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCreateWithoutActionsInput } from "../inputs/NotificationCreateWithoutActionsInput";
import { NotificationUpdateWithoutActionsInput } from "../inputs/NotificationUpdateWithoutActionsInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";

@TypeGraphQL.InputType("NotificationUpsertWithWhereUniqueWithoutActionsInput", {
  isAbstract: true
})
export class NotificationUpsertWithWhereUniqueWithoutActionsInput {
  @TypeGraphQL.Field(_type => NotificationWhereUniqueInput, {
    nullable: false
  })
  where!: NotificationWhereUniqueInput;

  @TypeGraphQL.Field(_type => NotificationUpdateWithoutActionsInput, {
    nullable: false
  })
  update!: NotificationUpdateWithoutActionsInput;

  @TypeGraphQL.Field(_type => NotificationCreateWithoutActionsInput, {
    nullable: false
  })
  create!: NotificationCreateWithoutActionsInput;
}
