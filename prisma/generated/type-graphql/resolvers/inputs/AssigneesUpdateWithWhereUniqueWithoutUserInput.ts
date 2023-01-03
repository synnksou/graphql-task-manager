import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneesUpdateWithoutUserInput } from "../inputs/AssigneesUpdateWithoutUserInput";
import { AssigneesWhereUniqueInput } from "../inputs/AssigneesWhereUniqueInput";

@TypeGraphQL.InputType("AssigneesUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class AssigneesUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => AssigneesWhereUniqueInput, {
    nullable: false
  })
  where!: AssigneesWhereUniqueInput;

  @TypeGraphQL.Field(_type => AssigneesUpdateWithoutUserInput, {
    nullable: false
  })
  data!: AssigneesUpdateWithoutUserInput;
}
