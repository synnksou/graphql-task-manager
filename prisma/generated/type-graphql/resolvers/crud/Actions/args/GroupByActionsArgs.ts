import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActionsOrderByWithAggregationInput } from "../../../inputs/ActionsOrderByWithAggregationInput";
import { ActionsScalarWhereWithAggregatesInput } from "../../../inputs/ActionsScalarWhereWithAggregatesInput";
import { ActionsWhereInput } from "../../../inputs/ActionsWhereInput";
import { ActionsScalarFieldEnum } from "../../../../enums/ActionsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByActionsArgs {
  @TypeGraphQL.Field(_type => ActionsWhereInput, {
    nullable: true
  })
  where?: ActionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ActionsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ActionsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "targetType" | "targetId">;

  @TypeGraphQL.Field(_type => ActionsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ActionsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
