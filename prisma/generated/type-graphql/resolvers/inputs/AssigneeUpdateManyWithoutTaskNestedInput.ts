import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneeCreateManyTaskInputEnvelope } from "../inputs/AssigneeCreateManyTaskInputEnvelope";
import { AssigneeCreateOrConnectWithoutTaskInput } from "../inputs/AssigneeCreateOrConnectWithoutTaskInput";
import { AssigneeCreateWithoutTaskInput } from "../inputs/AssigneeCreateWithoutTaskInput";
import { AssigneeScalarWhereInput } from "../inputs/AssigneeScalarWhereInput";
import { AssigneeUpdateManyWithWhereWithoutTaskInput } from "../inputs/AssigneeUpdateManyWithWhereWithoutTaskInput";
import { AssigneeUpdateWithWhereUniqueWithoutTaskInput } from "../inputs/AssigneeUpdateWithWhereUniqueWithoutTaskInput";
import { AssigneeUpsertWithWhereUniqueWithoutTaskInput } from "../inputs/AssigneeUpsertWithWhereUniqueWithoutTaskInput";
import { AssigneeWhereUniqueInput } from "../inputs/AssigneeWhereUniqueInput";

@TypeGraphQL.InputType("AssigneeUpdateManyWithoutTaskNestedInput", {
  isAbstract: true
})
export class AssigneeUpdateManyWithoutTaskNestedInput {
  @TypeGraphQL.Field(_type => [AssigneeCreateWithoutTaskInput], {
    nullable: true
  })
  create?: AssigneeCreateWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneeCreateOrConnectWithoutTaskInput], {
    nullable: true
  })
  connectOrCreate?: AssigneeCreateOrConnectWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneeUpsertWithWhereUniqueWithoutTaskInput], {
    nullable: true
  })
  upsert?: AssigneeUpsertWithWhereUniqueWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => AssigneeCreateManyTaskInputEnvelope, {
    nullable: true
  })
  createMany?: AssigneeCreateManyTaskInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [AssigneeUpdateWithWhereUniqueWithoutTaskInput], {
    nullable: true
  })
  update?: AssigneeUpdateWithWhereUniqueWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneeUpdateManyWithWhereWithoutTaskInput], {
    nullable: true
  })
  updateMany?: AssigneeUpdateManyWithWhereWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AssigneeScalarWhereInput[] | undefined;
}
