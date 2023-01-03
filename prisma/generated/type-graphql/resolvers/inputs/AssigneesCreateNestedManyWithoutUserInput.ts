import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneesCreateManyUserInputEnvelope } from "../inputs/AssigneesCreateManyUserInputEnvelope";
import { AssigneesCreateOrConnectWithoutUserInput } from "../inputs/AssigneesCreateOrConnectWithoutUserInput";
import { AssigneesCreateWithoutUserInput } from "../inputs/AssigneesCreateWithoutUserInput";
import { AssigneesWhereUniqueInput } from "../inputs/AssigneesWhereUniqueInput";

@TypeGraphQL.InputType("AssigneesCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class AssigneesCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [AssigneesCreateWithoutUserInput], {
    nullable: true
  })
  create?: AssigneesCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneesCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: AssigneesCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => AssigneesCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: AssigneesCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AssigneesWhereUniqueInput], {
    nullable: true
  })
  connect?: AssigneesWhereUniqueInput[] | undefined;
}
