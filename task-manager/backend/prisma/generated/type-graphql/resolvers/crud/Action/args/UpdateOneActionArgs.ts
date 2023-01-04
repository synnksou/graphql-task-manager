import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActionUpdateInput } from "../../../inputs/ActionUpdateInput";
import { ActionWhereUniqueInput } from "../../../inputs/ActionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneActionArgs {
  @TypeGraphQL.Field(_type => ActionUpdateInput, {
    nullable: false
  })
  data!: ActionUpdateInput;

  @TypeGraphQL.Field(_type => ActionWhereUniqueInput, {
    nullable: false
  })
  where!: ActionWhereUniqueInput;
}
