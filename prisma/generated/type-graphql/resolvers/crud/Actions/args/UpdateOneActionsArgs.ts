import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActionsUpdateInput } from "../../../inputs/ActionsUpdateInput";
import { ActionsWhereUniqueInput } from "../../../inputs/ActionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneActionsArgs {
  @TypeGraphQL.Field(_type => ActionsUpdateInput, {
    nullable: false
  })
  data!: ActionsUpdateInput;

  @TypeGraphQL.Field(_type => ActionsWhereUniqueInput, {
    nullable: false
  })
  where!: ActionsWhereUniqueInput;
}
