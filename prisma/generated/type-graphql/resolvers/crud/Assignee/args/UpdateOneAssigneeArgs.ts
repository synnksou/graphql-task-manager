import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssigneeUpdateInput } from "../../../inputs/AssigneeUpdateInput";
import { AssigneeWhereUniqueInput } from "../../../inputs/AssigneeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneAssigneeArgs {
  @TypeGraphQL.Field(_type => AssigneeUpdateInput, {
    nullable: false
  })
  data!: AssigneeUpdateInput;

  @TypeGraphQL.Field(_type => AssigneeWhereUniqueInput, {
    nullable: false
  })
  where!: AssigneeWhereUniqueInput;
}
