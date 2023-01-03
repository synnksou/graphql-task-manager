import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NotificationsCreateInput } from "../../../inputs/NotificationsCreateInput";
import { NotificationsUpdateInput } from "../../../inputs/NotificationsUpdateInput";
import { NotificationsWhereUniqueInput } from "../../../inputs/NotificationsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneNotificationsArgs {
  @TypeGraphQL.Field(_type => NotificationsWhereUniqueInput, {
    nullable: false
  })
  where!: NotificationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => NotificationsCreateInput, {
    nullable: false
  })
  create!: NotificationsCreateInput;

  @TypeGraphQL.Field(_type => NotificationsUpdateInput, {
    nullable: false
  })
  update!: NotificationsUpdateInput;
}
