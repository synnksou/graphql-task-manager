import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationsUpdateWithoutActionsInput } from "../inputs/NotificationsUpdateWithoutActionsInput";
import { NotificationsWhereUniqueInput } from "../inputs/NotificationsWhereUniqueInput";

@TypeGraphQL.InputType("NotificationsUpdateWithWhereUniqueWithoutActionsInput", {
  isAbstract: true
})
export class NotificationsUpdateWithWhereUniqueWithoutActionsInput {
  @TypeGraphQL.Field(_type => NotificationsWhereUniqueInput, {
    nullable: false
  })
  where!: NotificationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => NotificationsUpdateWithoutActionsInput, {
    nullable: false
  })
  data!: NotificationsUpdateWithoutActionsInput;
}
