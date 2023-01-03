import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActionsCreateInput } from "../../../inputs/ActionsCreateInput";
import { ActionsUpdateInput } from "../../../inputs/ActionsUpdateInput";
import { ActionsWhereUniqueInput } from "../../../inputs/ActionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneActionsArgs {
  @TypeGraphQL.Field(_type => ActionsWhereUniqueInput, {
    nullable: false
  })
  where!: ActionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ActionsCreateInput, {
    nullable: false
  })
  create!: ActionsCreateInput;

  @TypeGraphQL.Field(_type => ActionsUpdateInput, {
    nullable: false
  })
  update!: ActionsUpdateInput;
}
