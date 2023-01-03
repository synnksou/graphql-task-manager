import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssigneesWhereInput } from "../../../inputs/AssigneesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAssigneesArgs {
  @TypeGraphQL.Field(_type => AssigneesWhereInput, {
    nullable: true
  })
  where?: AssigneesWhereInput | undefined;
}
