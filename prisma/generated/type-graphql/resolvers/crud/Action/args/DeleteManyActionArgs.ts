import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActionWhereInput } from "../../../inputs/ActionWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyActionArgs {
  @TypeGraphQL.Field(_type => ActionWhereInput, {
    nullable: true
  })
  where?: ActionWhereInput | undefined;
}
