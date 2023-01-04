import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssigneeWhereUniqueInput } from "../../../inputs/AssigneeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueAssigneeOrThrowArgs {
  @TypeGraphQL.Field(_type => AssigneeWhereUniqueInput, {
    nullable: false
  })
  where!: AssigneeWhereUniqueInput;
}
