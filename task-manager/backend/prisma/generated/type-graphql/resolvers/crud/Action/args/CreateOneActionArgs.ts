import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActionCreateInput } from "../../../inputs/ActionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneActionArgs {
  @TypeGraphQL.Field(_type => ActionCreateInput, {
    nullable: false
  })
  data!: ActionCreateInput;
}
