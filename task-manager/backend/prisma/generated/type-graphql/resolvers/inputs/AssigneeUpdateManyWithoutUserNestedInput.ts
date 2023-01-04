import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneeCreateManyUserInputEnvelope } from "../inputs/AssigneeCreateManyUserInputEnvelope";
import { AssigneeCreateOrConnectWithoutUserInput } from "../inputs/AssigneeCreateOrConnectWithoutUserInput";
import { AssigneeCreateWithoutUserInput } from "../inputs/AssigneeCreateWithoutUserInput";
import { AssigneeScalarWhereInput } from "../inputs/AssigneeScalarWhereInput";
import { AssigneeUpdateManyWithWhereWithoutUserInput } from "../inputs/AssigneeUpdateManyWithWhereWithoutUserInput";
import { AssigneeUpdateWithWhereUniqueWithoutUserInput } from "../inputs/AssigneeUpdateWithWhereUniqueWithoutUserInput";
import { AssigneeUpsertWithWhereUniqueWithoutUserInput } from "../inputs/AssigneeUpsertWithWhereUniqueWithoutUserInput";
import { AssigneeWhereUniqueInput } from "../inputs/AssigneeWhereUniqueInput";

@TypeGraphQL.InputType("AssigneeUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class AssigneeUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [AssigneeCreateWithoutUserInput], {
    nullable: true
  })
  create?: AssigneeCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneeCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: AssigneeCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneeUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: AssigneeUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => AssigneeCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: AssigneeCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AssigneeWhereUniqueInput], {
    nullable: true
  })
  set?: AssigneeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneeWhereUniqueInput], {
    nullable: true
  })
  disconnect?: AssigneeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneeWhereUniqueInput], {
    nullable: true
  })
  delete?: AssigneeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneeWhereUniqueInput], {
    nullable: true
  })
  connect?: AssigneeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneeUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: AssigneeUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneeUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: AssigneeUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AssigneeScalarWhereInput[] | undefined;
}
