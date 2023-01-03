import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssigneesUpdateInput } from "../../../inputs/AssigneesUpdateInput";
import { AssigneesWhereUniqueInput } from "../../../inputs/AssigneesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneAssigneesArgs {
  @TypeGraphQL.Field(_type => AssigneesUpdateInput, {
    nullable: false
  })
  data!: AssigneesUpdateInput;

  @TypeGraphQL.Field(_type => AssigneesWhereUniqueInput, {
    nullable: false
  })
  where!: AssigneesWhereUniqueInput;
}
