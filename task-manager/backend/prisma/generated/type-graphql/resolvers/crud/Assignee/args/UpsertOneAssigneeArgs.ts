import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssigneeCreateInput } from "../../../inputs/AssigneeCreateInput";
import { AssigneeUpdateInput } from "../../../inputs/AssigneeUpdateInput";
import { AssigneeWhereUniqueInput } from "../../../inputs/AssigneeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneAssigneeArgs {
  @TypeGraphQL.Field(_type => AssigneeWhereUniqueInput, {
    nullable: false
  })
  where!: AssigneeWhereUniqueInput;

  @TypeGraphQL.Field(_type => AssigneeCreateInput, {
    nullable: false
  })
  create!: AssigneeCreateInput;

  @TypeGraphQL.Field(_type => AssigneeUpdateInput, {
    nullable: false
  })
  update!: AssigneeUpdateInput;
}
