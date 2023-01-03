import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssigneesCreateInput } from "../../../inputs/AssigneesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneAssigneesArgs {
  @TypeGraphQL.Field(_type => AssigneesCreateInput, {
    nullable: false
  })
  data!: AssigneesCreateInput;
}
