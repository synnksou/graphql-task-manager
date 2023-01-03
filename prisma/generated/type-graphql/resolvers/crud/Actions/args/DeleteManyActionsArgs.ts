import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActionsWhereInput } from "../../../inputs/ActionsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyActionsArgs {
  @TypeGraphQL.Field(_type => ActionsWhereInput, {
    nullable: true
  })
  where?: ActionsWhereInput | undefined;
}
