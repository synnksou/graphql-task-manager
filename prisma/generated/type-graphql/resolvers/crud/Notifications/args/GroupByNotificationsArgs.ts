import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NotificationsOrderByWithAggregationInput } from "../../../inputs/NotificationsOrderByWithAggregationInput";
import { NotificationsScalarWhereWithAggregatesInput } from "../../../inputs/NotificationsScalarWhereWithAggregatesInput";
import { NotificationsWhereInput } from "../../../inputs/NotificationsWhereInput";
import { NotificationsScalarFieldEnum } from "../../../../enums/NotificationsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByNotificationsArgs {
  @TypeGraphQL.Field(_type => NotificationsWhereInput, {
    nullable: true
  })
  where?: NotificationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [NotificationsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: NotificationsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "readed_at" | "userId" | "actionsId">;

  @TypeGraphQL.Field(_type => NotificationsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: NotificationsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
