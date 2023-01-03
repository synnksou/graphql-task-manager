import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NotificationsWhereUniqueInput } from "../../../inputs/NotificationsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueNotificationsOrThrowArgs {
  @TypeGraphQL.Field(_type => NotificationsWhereUniqueInput, {
    nullable: false
  })
  where!: NotificationsWhereUniqueInput;
}
