import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateManyOwnerIdInputEnvelope } from "../inputs/TaskCreateManyOwnerIdInputEnvelope";
import { TaskCreateOrConnectWithoutOwnerIdInput } from "../inputs/TaskCreateOrConnectWithoutOwnerIdInput";
import { TaskCreateWithoutOwnerIdInput } from "../inputs/TaskCreateWithoutOwnerIdInput";
import { TaskScalarWhereInput } from "../inputs/TaskScalarWhereInput";
import { TaskUpdateManyWithWhereWithoutOwnerIdInput } from "../inputs/TaskUpdateManyWithWhereWithoutOwnerIdInput";
import { TaskUpdateWithWhereUniqueWithoutOwnerIdInput } from "../inputs/TaskUpdateWithWhereUniqueWithoutOwnerIdInput";
import { TaskUpsertWithWhereUniqueWithoutOwnerIdInput } from "../inputs/TaskUpsertWithWhereUniqueWithoutOwnerIdInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpdateManyWithoutOwnerIdNestedInput", {
  isAbstract: true
})
export class TaskUpdateManyWithoutOwnerIdNestedInput {
  @TypeGraphQL.Field(_type => [TaskCreateWithoutOwnerIdInput], {
    nullable: true
  })
  create?: TaskCreateWithoutOwnerIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutOwnerIdInput], {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutOwnerIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskUpsertWithWhereUniqueWithoutOwnerIdInput], {
    nullable: true
  })
  upsert?: TaskUpsertWithWhereUniqueWithoutOwnerIdInput[] | undefined;

  @TypeGraphQL.Field(_type => TaskCreateManyOwnerIdInputEnvelope, {
    nullable: true
  })
  createMany?: TaskCreateManyOwnerIdInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  set?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  delete?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  connect?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskUpdateWithWhereUniqueWithoutOwnerIdInput], {
    nullable: true
  })
  update?: TaskUpdateWithWhereUniqueWithoutOwnerIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskUpdateManyWithWhereWithoutOwnerIdInput], {
    nullable: true
  })
  updateMany?: TaskUpdateManyWithWhereWithoutOwnerIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TaskScalarWhereInput[] | undefined;
}
