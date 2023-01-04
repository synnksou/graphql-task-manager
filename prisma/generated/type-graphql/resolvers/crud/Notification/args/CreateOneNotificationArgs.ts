import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NotificationCreateInput } from "../../../inputs/NotificationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneNotificationArgs {
  @TypeGraphQL.Field(_type => NotificationCreateInput, {
    nullable: false
  })
  data!: NotificationCreateInput;
}
