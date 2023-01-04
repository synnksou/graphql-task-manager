import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActionOrderByWithAggregationInput } from "../../../inputs/ActionOrderByWithAggregationInput";
import { ActionScalarWhereWithAggregatesInput } from "../../../inputs/ActionScalarWhereWithAggregatesInput";
import { ActionWhereInput } from "../../../inputs/ActionWhereInput";
import { ActionScalarFieldEnum } from "../../../../enums/ActionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByActionArgs {
  @TypeGraphQL.Field(_type => ActionWhereInput, {
    nullable: true
  })
  where?: ActionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ActionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ActionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "targetType" | "targetId">;

  @TypeGraphQL.Field(_type => ActionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ActionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
