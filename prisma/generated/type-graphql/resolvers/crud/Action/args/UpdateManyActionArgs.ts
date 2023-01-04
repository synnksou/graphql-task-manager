import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActionUpdateManyMutationInput } from "../../../inputs/ActionUpdateManyMutationInput";
import { ActionWhereInput } from "../../../inputs/ActionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyActionArgs {
  @TypeGraphQL.Field(_type => ActionUpdateManyMutationInput, {
    nullable: false
  })
  data!: ActionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ActionWhereInput, {
    nullable: true
  })
  where?: ActionWhereInput | undefined;
}
