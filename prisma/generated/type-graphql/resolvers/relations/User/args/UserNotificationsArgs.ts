import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NotificationsOrderByWithRelationInput } from "../../../inputs/NotificationsOrderByWithRelationInput";
import { NotificationsWhereInput } from "../../../inputs/NotificationsWhereInput";
import { NotificationsWhereUniqueInput } from "../../../inputs/NotificationsWhereUniqueInput";
import { NotificationsScalarFieldEnum } from "../../../../enums/NotificationsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class UserNotificationsArgs {
  @TypeGraphQL.Field(_type => NotificationsWhereInput, {
    nullable: true
  })
  where?: NotificationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [NotificationsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: NotificationsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => NotificationsWhereUniqueInput, {
    nullable: true
  })
  cursor?: NotificationsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [NotificationsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "readed_at" | "userId" | "actionsId"> | undefined;
}
