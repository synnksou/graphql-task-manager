import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionCreateManyTaskInputEnvelope } from "../inputs/ActionCreateManyTaskInputEnvelope";
import { ActionCreateOrConnectWithoutTaskInput } from "../inputs/ActionCreateOrConnectWithoutTaskInput";
import { ActionCreateWithoutTaskInput } from "../inputs/ActionCreateWithoutTaskInput";
import { ActionScalarWhereInput } from "../inputs/ActionScalarWhereInput";
import { ActionUpdateManyWithWhereWithoutTaskInput } from "../inputs/ActionUpdateManyWithWhereWithoutTaskInput";
import { ActionUpdateWithWhereUniqueWithoutTaskInput } from "../inputs/ActionUpdateWithWhereUniqueWithoutTaskInput";
import { ActionUpsertWithWhereUniqueWithoutTaskInput } from "../inputs/ActionUpsertWithWhereUniqueWithoutTaskInput";
import { ActionWhereUniqueInput } from "../inputs/ActionWhereUniqueInput";

@TypeGraphQL.InputType("ActionUpdateManyWithoutTaskNestedInput", {
  isAbstract: true
})
export class ActionUpdateManyWithoutTaskNestedInput {
  @TypeGraphQL.Field(_type => [ActionCreateWithoutTaskInput], {
    nullable: true
  })
  create?: ActionCreateWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionCreateOrConnectWithoutTaskInput], {
    nullable: true
  })
  connectOrCreate?: ActionCreateOrConnectWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionUpsertWithWhereUniqueWithoutTaskInput], {
    nullable: true
  })
  upsert?: ActionUpsertWithWhereUniqueWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => ActionCreateManyTaskInputEnvelope, {
    nullable: true
  })
  createMany?: ActionCreateManyTaskInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ActionWhereUniqueInput], {
    nullable: true
  })
  set?: ActionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ActionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionWhereUniqueInput], {
    nullable: true
  })
  delete?: ActionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionWhereUniqueInput], {
    nullable: true
  })
  connect?: ActionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionUpdateWithWhereUniqueWithoutTaskInput], {
    nullable: true
  })
  update?: ActionUpdateWithWhereUniqueWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionUpdateManyWithWhereWithoutTaskInput], {
    nullable: true
  })
  updateMany?: ActionUpdateManyWithWhereWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ActionScalarWhereInput[] | undefined;
}
