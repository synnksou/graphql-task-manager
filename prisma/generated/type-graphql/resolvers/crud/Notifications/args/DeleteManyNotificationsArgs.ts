import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NotificationsWhereInput } from "../../../inputs/NotificationsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyNotificationsArgs {
  @TypeGraphQL.Field(_type => NotificationsWhereInput, {
    nullable: true
  })
  where?: NotificationsWhereInput | undefined;
}
