import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssigneesCreateInput } from "../../../inputs/AssigneesCreateInput";
import { AssigneesUpdateInput } from "../../../inputs/AssigneesUpdateInput";
import { AssigneesWhereUniqueInput } from "../../../inputs/AssigneesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneAssigneesArgs {
  @TypeGraphQL.Field(_type => AssigneesWhereUniqueInput, {
    nullable: false
  })
  where!: AssigneesWhereUniqueInput;

  @TypeGraphQL.Field(_type => AssigneesCreateInput, {
    nullable: false
  })
  create!: AssigneesCreateInput;

  @TypeGraphQL.Field(_type => AssigneesUpdateInput, {
    nullable: false
  })
  update!: AssigneesUpdateInput;
}
