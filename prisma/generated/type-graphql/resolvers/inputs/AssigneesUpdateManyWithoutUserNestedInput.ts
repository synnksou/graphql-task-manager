import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneesCreateManyUserInputEnvelope } from "../inputs/AssigneesCreateManyUserInputEnvelope";
import { AssigneesCreateOrConnectWithoutUserInput } from "../inputs/AssigneesCreateOrConnectWithoutUserInput";
import { AssigneesCreateWithoutUserInput } from "../inputs/AssigneesCreateWithoutUserInput";
import { AssigneesScalarWhereInput } from "../inputs/AssigneesScalarWhereInput";
import { AssigneesUpdateManyWithWhereWithoutUserInput } from "../inputs/AssigneesUpdateManyWithWhereWithoutUserInput";
import { AssigneesUpdateWithWhereUniqueWithoutUserInput } from "../inputs/AssigneesUpdateWithWhereUniqueWithoutUserInput";
import { AssigneesUpsertWithWhereUniqueWithoutUserInput } from "../inputs/AssigneesUpsertWithWhereUniqueWithoutUserInput";
import { AssigneesWhereUniqueInput } from "../inputs/AssigneesWhereUniqueInput";

@TypeGraphQL.InputType("AssigneesUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class AssigneesUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [AssigneesCreateWithoutUserInput], {
    nullable: true
  })
  create?: AssigneesCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneesCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: AssigneesCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneesUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: AssigneesUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => AssigneesCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: AssigneesCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AssigneesWhereUniqueInput], {
    nullable: true
  })
  set?: AssigneesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: AssigneesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneesWhereUniqueInput], {
    nullable: true
  })
  delete?: AssigneesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneesWhereUniqueInput], {
    nullable: true
  })
  connect?: AssigneesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneesUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: AssigneesUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneesUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: AssigneesUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AssigneesScalarWhereInput[] | undefined;
}
