import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NotificationsUpdateInput } from "../../../inputs/NotificationsUpdateInput";
import { NotificationsWhereUniqueInput } from "../../../inputs/NotificationsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneNotificationsArgs {
  @TypeGraphQL.Field(_type => NotificationsUpdateInput, {
    nullable: false
  })
  data!: NotificationsUpdateInput;

  @TypeGraphQL.Field(_type => NotificationsWhereUniqueInput, {
    nullable: false
  })
  where!: NotificationsWhereUniqueInput;
}
