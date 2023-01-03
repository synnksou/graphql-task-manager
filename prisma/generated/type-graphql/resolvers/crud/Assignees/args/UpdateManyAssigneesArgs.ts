import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssigneesUpdateManyMutationInput } from "../../../inputs/AssigneesUpdateManyMutationInput";
import { AssigneesWhereInput } from "../../../inputs/AssigneesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAssigneesArgs {
  @TypeGraphQL.Field(_type => AssigneesUpdateManyMutationInput, {
    nullable: false
  })
  data!: AssigneesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => AssigneesWhereInput, {
    nullable: true
  })
  where?: AssigneesWhereInput | undefined;
}
