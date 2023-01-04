import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssigneeCreateInput } from "../../../inputs/AssigneeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneAssigneeArgs {
  @TypeGraphQL.Field(_type => AssigneeCreateInput, {
    nullable: false
  })
  data!: AssigneeCreateInput;
}
