import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActionsWhereUniqueInput } from "../../../inputs/ActionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueActionsArgs {
  @TypeGraphQL.Field(_type => ActionsWhereUniqueInput, {
    nullable: false
  })
  where!: ActionsWhereUniqueInput;
}
