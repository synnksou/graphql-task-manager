import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssigneeWhereInput } from "../../../inputs/AssigneeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAssigneeArgs {
  @TypeGraphQL.Field(_type => AssigneeWhereInput, {
    nullable: true
  })
  where?: AssigneeWhereInput | undefined;
}
