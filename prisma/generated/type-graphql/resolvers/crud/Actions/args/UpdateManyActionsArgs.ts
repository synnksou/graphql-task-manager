import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActionsUpdateManyMutationInput } from "../../../inputs/ActionsUpdateManyMutationInput";
import { ActionsWhereInput } from "../../../inputs/ActionsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyActionsArgs {
  @TypeGraphQL.Field(_type => ActionsUpdateManyMutationInput, {
    nullable: false
  })
  data!: ActionsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ActionsWhereInput, {
    nullable: true
  })
  where?: ActionsWhereInput | undefined;
}
