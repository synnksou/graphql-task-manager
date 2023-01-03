import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneesCreateManyUserInput } from "../inputs/AssigneesCreateManyUserInput";

@TypeGraphQL.InputType("AssigneesCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class AssigneesCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [AssigneesCreateManyUserInput], {
    nullable: false
  })
  data!: AssigneesCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
