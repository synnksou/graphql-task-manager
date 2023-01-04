import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssigneeOrderByWithRelationInput } from "../../../inputs/AssigneeOrderByWithRelationInput";
import { AssigneeWhereInput } from "../../../inputs/AssigneeWhereInput";
import { AssigneeWhereUniqueInput } from "../../../inputs/AssigneeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateAssigneeArgs {
  @TypeGraphQL.Field(_type => AssigneeWhereInput, {
    nullable: true
  })
  where?: AssigneeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AssigneeOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: AssigneeOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => AssigneeWhereUniqueInput, {
    nullable: true
  })
  cursor?: AssigneeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
