import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationsUpdateWithoutUserInput } from "../inputs/NotificationsUpdateWithoutUserInput";
import { NotificationsWhereUniqueInput } from "../inputs/NotificationsWhereUniqueInput";

@TypeGraphQL.InputType("NotificationsUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class NotificationsUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => NotificationsWhereUniqueInput, {
    nullable: false
  })
  where!: NotificationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => NotificationsUpdateWithoutUserInput, {
    nullable: false
  })
  data!: NotificationsUpdateWithoutUserInput;
}
