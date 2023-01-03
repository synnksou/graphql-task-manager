import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksCreateManyOwnerIdInputEnvelope } from "../inputs/TasksCreateManyOwnerIdInputEnvelope";
import { TasksCreateOrConnectWithoutOwnerIdInput } from "../inputs/TasksCreateOrConnectWithoutOwnerIdInput";
import { TasksCreateWithoutOwnerIdInput } from "../inputs/TasksCreateWithoutOwnerIdInput";
import { TasksScalarWhereInput } from "../inputs/TasksScalarWhereInput";
import { TasksUpdateManyWithWhereWithoutOwnerIdInput } from "../inputs/TasksUpdateManyWithWhereWithoutOwnerIdInput";
import { TasksUpdateWithWhereUniqueWithoutOwnerIdInput } from "../inputs/TasksUpdateWithWhereUniqueWithoutOwnerIdInput";
import { TasksUpsertWithWhereUniqueWithoutOwnerIdInput } from "../inputs/TasksUpsertWithWhereUniqueWithoutOwnerIdInput";
import { TasksWhereUniqueInput } from "../inputs/TasksWhereUniqueInput";

@TypeGraphQL.InputType("TasksUpdateManyWithoutOwnerIdNestedInput", {
  isAbstract: true
})
export class TasksUpdateManyWithoutOwnerIdNestedInput {
  @TypeGraphQL.Field(_type => [TasksCreateWithoutOwnerIdInput], {
    nullable: true
  })
  create?: TasksCreateWithoutOwnerIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [TasksCreateOrConnectWithoutOwnerIdInput], {
    nullable: true
  })
  connectOrCreate?: TasksCreateOrConnectWithoutOwnerIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [TasksUpsertWithWhereUniqueWithoutOwnerIdInput], {
    nullable: true
  })
  upsert?: TasksUpsertWithWhereUniqueWithoutOwnerIdInput[] | undefined;

  @TypeGraphQL.Field(_type => TasksCreateManyOwnerIdInputEnvelope, {
    nullable: true
  })
  createMany?: TasksCreateManyOwnerIdInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TasksWhereUniqueInput], {
    nullable: true
  })
  set?: TasksWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TasksWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TasksWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TasksWhereUniqueInput], {
    nullable: true
  })
  delete?: TasksWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TasksWhereUniqueInput], {
    nullable: true
  })
  connect?: TasksWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TasksUpdateWithWhereUniqueWithoutOwnerIdInput], {
    nullable: true
  })
  update?: TasksUpdateWithWhereUniqueWithoutOwnerIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [TasksUpdateManyWithWhereWithoutOwnerIdInput], {
    nullable: true
  })
  updateMany?: TasksUpdateManyWithWhereWithoutOwnerIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [TasksScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TasksScalarWhereInput[] | undefined;
}
