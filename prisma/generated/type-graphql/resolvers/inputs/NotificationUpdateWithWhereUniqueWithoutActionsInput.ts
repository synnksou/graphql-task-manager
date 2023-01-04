import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationUpdateWithoutActionsInput } from "../inputs/NotificationUpdateWithoutActionsInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";

@TypeGraphQL.InputType("NotificationUpdateWithWhereUniqueWithoutActionsInput", {
  isAbstract: true
})
export class NotificationUpdateWithWhereUniqueWithoutActionsInput {
  @TypeGraphQL.Field(_type => NotificationWhereUniqueInput, {
    nullable: false
  })
  where!: NotificationWhereUniqueInput;

  @TypeGraphQL.Field(_type => NotificationUpdateWithoutActionsInput, {
    nullable: false
  })
  data!: NotificationUpdateWithoutActionsInput;
}
