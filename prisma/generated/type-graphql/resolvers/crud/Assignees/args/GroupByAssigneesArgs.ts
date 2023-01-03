import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssigneesOrderByWithAggregationInput } from "../../../inputs/AssigneesOrderByWithAggregationInput";
import { AssigneesScalarWhereWithAggregatesInput } from "../../../inputs/AssigneesScalarWhereWithAggregatesInput";
import { AssigneesWhereInput } from "../../../inputs/AssigneesWhereInput";
import { AssigneesScalarFieldEnum } from "../../../../enums/AssigneesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAssigneesArgs {
  @TypeGraphQL.Field(_type => AssigneesWhereInput, {
    nullable: true
  })
  where?: AssigneesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AssigneesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: AssigneesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "tasksId" | "userId">;

  @TypeGraphQL.Field(_type => AssigneesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: AssigneesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
