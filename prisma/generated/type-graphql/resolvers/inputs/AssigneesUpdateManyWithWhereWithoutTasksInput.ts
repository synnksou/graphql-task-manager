import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneesScalarWhereInput } from "../inputs/AssigneesScalarWhereInput";
import { AssigneesUpdateManyMutationInput } from "../inputs/AssigneesUpdateManyMutationInput";

@TypeGraphQL.InputType("AssigneesUpdateManyWithWhereWithoutTasksInput", {
  isAbstract: true
})
export class AssigneesUpdateManyWithWhereWithoutTasksInput {
  @TypeGraphQL.Field(_type => AssigneesScalarWhereInput, {
    nullable: false
  })
  where!: AssigneesScalarWhereInput;

  @TypeGraphQL.Field(_type => AssigneesUpdateManyMutationInput, {
    nullable: false
  })
  data!: AssigneesUpdateManyMutationInput;
}
