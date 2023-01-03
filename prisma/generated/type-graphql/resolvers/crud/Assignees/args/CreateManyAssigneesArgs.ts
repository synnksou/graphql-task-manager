import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AssigneesCreateManyInput } from "../../../inputs/AssigneesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAssigneesArgs {
  @TypeGraphQL.Field(_type => [AssigneesCreateManyInput], {
    nullable: false
  })
  data!: AssigneesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
