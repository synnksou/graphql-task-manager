import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NotificationsWhereUniqueInput } from "../../../inputs/NotificationsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneNotificationsArgs {
  @TypeGraphQL.Field(_type => NotificationsWhereUniqueInput, {
    nullable: false
  })
  where!: NotificationsWhereUniqueInput;
}
