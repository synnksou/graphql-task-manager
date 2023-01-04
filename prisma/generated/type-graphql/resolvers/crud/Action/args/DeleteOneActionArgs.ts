import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActionWhereUniqueInput } from "../../../inputs/ActionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneActionArgs {
  @TypeGraphQL.Field(_type => ActionWhereUniqueInput, {
    nullable: false
  })
  where!: ActionWhereUniqueInput;
}
