import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationsScalarWhereInput } from "../inputs/NotificationsScalarWhereInput";
import { NotificationsUpdateManyMutationInput } from "../inputs/NotificationsUpdateManyMutationInput";

@TypeGraphQL.InputType("NotificationsUpdateManyWithWhereWithoutActionsInput", {
  isAbstract: true
})
export class NotificationsUpdateManyWithWhereWithoutActionsInput {
  @TypeGraphQL.Field(_type => NotificationsScalarWhereInput, {
    nullable: false
  })
  where!: NotificationsScalarWhereInput;

  @TypeGraphQL.Field(_type => NotificationsUpdateManyMutationInput, {
    nullable: false
  })
  data!: NotificationsUpdateManyMutationInput;
}
