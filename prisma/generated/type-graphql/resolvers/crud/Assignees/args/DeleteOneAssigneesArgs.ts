import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssigneesWhereUniqueInput } from "../../../inputs/AssigneesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneAssigneesArgs {
  @TypeGraphQL.Field(_type => AssigneesWhereUniqueInput, {
    nullable: false
  })
  where!: AssigneesWhereUniqueInput;
}
