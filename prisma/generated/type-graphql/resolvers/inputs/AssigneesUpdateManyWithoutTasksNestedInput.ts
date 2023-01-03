import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneesCreateManyTasksInputEnvelope } from "../inputs/AssigneesCreateManyTasksInputEnvelope";
import { AssigneesCreateOrConnectWithoutTasksInput } from "../inputs/AssigneesCreateOrConnectWithoutTasksInput";
import { AssigneesCreateWithoutTasksInput } from "../inputs/AssigneesCreateWithoutTasksInput";
import { AssigneesScalarWhereInput } from "../inputs/AssigneesScalarWhereInput";
import { AssigneesUpdateManyWithWhereWithoutTasksInput } from "../inputs/AssigneesUpdateManyWithWhereWithoutTasksInput";
import { AssigneesUpdateWithWhereUniqueWithoutTasksInput } from "../inputs/AssigneesUpdateWithWhereUniqueWithoutTasksInput";
import { AssigneesUpsertWithWhereUniqueWithoutTasksInput } from "../inputs/AssigneesUpsertWithWhereUniqueWithoutTasksInput";
import { AssigneesWhereUniqueInput } from "../inputs/AssigneesWhereUniqueInput";

@TypeGraphQL.InputType("AssigneesUpdateManyWithoutTasksNestedInput", {
  isAbstract: true
})
export class AssigneesUpdateManyWithoutTasksNestedInput {
  @TypeGraphQL.Field(_type => [AssigneesCreateWithoutTasksInput], {
    nullable: true
  })
  create?: AssigneesCreateWithoutTasksInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneesCreateOrConnectWithoutTasksInput], {
    nullable: true
  })
  connectOrCreate?: AssigneesCreateOrConnectWithoutTasksInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneesUpsertWithWhereUniqueWithoutTasksInput], {
    nullable: true
  })
  upsert?: AssigneesUpsertWithWhereUniqueWithoutTasksInput[] | undefined;

  @TypeGraphQL.Field(_type => AssigneesCreateManyTasksInputEnvelope, {
    nullable: true
  })
  createMany?: AssigneesCreateManyTasksInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [AssigneesUpdateWithWhereUniqueWithoutTasksInput], {
    nullable: true
  })
  update?: AssigneesUpdateWithWhereUniqueWithoutTasksInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneesUpdateManyWithWhereWithoutTasksInput], {
    nullable: true
  })
  updateMany?: AssigneesUpdateManyWithWhereWithoutTasksInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AssigneesScalarWhereInput[] | undefined;
}
