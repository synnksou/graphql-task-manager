import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneesCreateWithoutUserInput } from "../inputs/AssigneesCreateWithoutUserInput";
import { AssigneesWhereUniqueInput } from "../inputs/AssigneesWhereUniqueInput";

@TypeGraphQL.InputType("AssigneesCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class AssigneesCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => AssigneesWhereUniqueInput, {
    nullable: false
  })
  where!: AssigneesWhereUniqueInput;

  @TypeGraphQL.Field(_type => AssigneesCreateWithoutUserInput, {
    nullable: false
  })
  create!: AssigneesCreateWithoutUserInput;
}
