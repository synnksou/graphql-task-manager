import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActionsCreateInput } from "../../../inputs/ActionsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneActionsArgs {
  @TypeGraphQL.Field(_type => ActionsCreateInput, {
    nullable: false
  })
  data!: ActionsCreateInput;
}
