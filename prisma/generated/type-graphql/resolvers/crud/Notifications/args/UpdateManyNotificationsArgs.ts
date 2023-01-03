import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NotificationsUpdateManyMutationInput } from "../../../inputs/NotificationsUpdateManyMutationInput";
import { NotificationsWhereInput } from "../../../inputs/NotificationsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyNotificationsArgs {
  @TypeGraphQL.Field(_type => NotificationsUpdateManyMutationInput, {
    nullable: false
  })
  data!: NotificationsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => NotificationsWhereInput, {
    nullable: true
  })
  where?: NotificationsWhereInput | undefined;
}
