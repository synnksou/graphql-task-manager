import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssigneeUpdateManyMutationInput } from "../../../inputs/AssigneeUpdateManyMutationInput";
import { AssigneeWhereInput } from "../../../inputs/AssigneeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAssigneeArgs {
  @TypeGraphQL.Field(_type => AssigneeUpdateManyMutationInput, {
    nullable: false
  })
  data!: AssigneeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => AssigneeWhereInput, {
    nullable: true
  })
  where?: AssigneeWhereInput | undefined;
}
