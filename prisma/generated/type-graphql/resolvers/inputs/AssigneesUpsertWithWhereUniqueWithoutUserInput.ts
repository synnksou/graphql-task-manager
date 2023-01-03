import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneesCreateWithoutUserInput } from "../inputs/AssigneesCreateWithoutUserInput";
import { AssigneesUpdateWithoutUserInput } from "../inputs/AssigneesUpdateWithoutUserInput";
import { AssigneesWhereUniqueInput } from "../inputs/AssigneesWhereUniqueInput";

@TypeGraphQL.InputType("AssigneesUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class AssigneesUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => AssigneesWhereUniqueInput, {
    nullable: false
  })
  where!: AssigneesWhereUniqueInput;

  @TypeGraphQL.Field(_type => AssigneesUpdateWithoutUserInput, {
    nullable: false
  })
  update!: AssigneesUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => AssigneesCreateWithoutUserInput, {
    nullable: false
  })
  create!: AssigneesCreateWithoutUserInput;
}
