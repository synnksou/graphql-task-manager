import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationsCreateWithoutUserInput } from "../inputs/NotificationsCreateWithoutUserInput";
import { NotificationsUpdateWithoutUserInput } from "../inputs/NotificationsUpdateWithoutUserInput";
import { NotificationsWhereUniqueInput } from "../inputs/NotificationsWhereUniqueInput";

@TypeGraphQL.InputType("NotificationsUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class NotificationsUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => NotificationsWhereUniqueInput, {
    nullable: false
  })
  where!: NotificationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => NotificationsUpdateWithoutUserInput, {
    nullable: false
  })
  update!: NotificationsUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => NotificationsCreateWithoutUserInput, {
    nullable: false
  })
  create!: NotificationsCreateWithoutUserInput;
}
