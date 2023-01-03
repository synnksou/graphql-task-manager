import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NotificationsCreateInput } from "../../../inputs/NotificationsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneNotificationsArgs {
  @TypeGraphQL.Field(_type => NotificationsCreateInput, {
    nullable: false
  })
  data!: NotificationsCreateInput;
}
