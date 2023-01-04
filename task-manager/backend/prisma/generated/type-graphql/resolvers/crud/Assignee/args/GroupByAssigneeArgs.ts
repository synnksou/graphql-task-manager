import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssigneeOrderByWithAggregationInput } from "../../../inputs/AssigneeOrderByWithAggregationInput";
import { AssigneeScalarWhereWithAggregatesInput } from "../../../inputs/AssigneeScalarWhereWithAggregatesInput";
import { AssigneeWhereInput } from "../../../inputs/AssigneeWhereInput";
import { AssigneeScalarFieldEnum } from "../../../../enums/AssigneeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAssigneeArgs {
  @TypeGraphQL.Field(_type => AssigneeWhereInput, {
    nullable: true
  })
  where?: AssigneeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AssigneeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: AssigneeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "taskId" | "userId">;

  @TypeGraphQL.Field(_type => AssigneeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: AssigneeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
