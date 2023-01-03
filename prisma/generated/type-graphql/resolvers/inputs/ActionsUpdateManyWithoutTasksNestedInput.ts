import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionsCreateManyTasksInputEnvelope } from "../inputs/ActionsCreateManyTasksInputEnvelope";
import { ActionsCreateOrConnectWithoutTasksInput } from "../inputs/ActionsCreateOrConnectWithoutTasksInput";
import { ActionsCreateWithoutTasksInput } from "../inputs/ActionsCreateWithoutTasksInput";
import { ActionsScalarWhereInput } from "../inputs/ActionsScalarWhereInput";
import { ActionsUpdateManyWithWhereWithoutTasksInput } from "../inputs/ActionsUpdateManyWithWhereWithoutTasksInput";
import { ActionsUpdateWithWhereUniqueWithoutTasksInput } from "../inputs/ActionsUpdateWithWhereUniqueWithoutTasksInput";
import { ActionsUpsertWithWhereUniqueWithoutTasksInput } from "../inputs/ActionsUpsertWithWhereUniqueWithoutTasksInput";
import { ActionsWhereUniqueInput } from "../inputs/ActionsWhereUniqueInput";

@TypeGraphQL.InputType("ActionsUpdateManyWithoutTasksNestedInput", {
  isAbstract: true
})
export class ActionsUpdateManyWithoutTasksNestedInput {
  @TypeGraphQL.Field(_type => [ActionsCreateWithoutTasksInput], {
    nullable: true
  })
  create?: ActionsCreateWithoutTasksInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionsCreateOrConnectWithoutTasksInput], {
    nullable: true
  })
  connectOrCreate?: ActionsCreateOrConnectWithoutTasksInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionsUpsertWithWhereUniqueWithoutTasksInput], {
    nullable: true
  })
  upsert?: ActionsUpsertWithWhereUniqueWithoutTasksInput[] | undefined;

  @TypeGraphQL.Field(_type => ActionsCreateManyTasksInputEnvelope, {
    nullable: true
  })
  createMany?: ActionsCreateManyTasksInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ActionsWhereUniqueInput], {
    nullable: true
  })
  set?: ActionsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ActionsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionsWhereUniqueInput], {
    nullable: true
  })
  delete?: ActionsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionsWhereUniqueInput], {
    nullable: true
  })
  connect?: ActionsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionsUpdateWithWhereUniqueWithoutTasksInput], {
    nullable: true
  })
  update?: ActionsUpdateWithWhereUniqueWithoutTasksInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionsUpdateManyWithWhereWithoutTasksInput], {
    nullable: true
  })
  updateMany?: ActionsUpdateManyWithWhereWithoutTasksInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ActionsScalarWhereInput[] | undefined;
}
