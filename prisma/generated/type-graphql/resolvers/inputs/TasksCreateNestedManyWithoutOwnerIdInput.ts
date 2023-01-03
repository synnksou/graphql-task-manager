import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksCreateManyOwnerIdInputEnvelope } from "../inputs/TasksCreateManyOwnerIdInputEnvelope";
import { TasksCreateOrConnectWithoutOwnerIdInput } from "../inputs/TasksCreateOrConnectWithoutOwnerIdInput";
import { TasksCreateWithoutOwnerIdInput } from "../inputs/TasksCreateWithoutOwnerIdInput";
import { TasksWhereUniqueInput } from "../inputs/TasksWhereUniqueInput";

@TypeGraphQL.InputType("TasksCreateNestedManyWithoutOwnerIdInput", {
  isAbstract: true
})
export class TasksCreateNestedManyWithoutOwnerIdInput {
  @TypeGraphQL.Field(_type => [TasksCreateWithoutOwnerIdInput], {
    nullable: true
  })
  create?: TasksCreateWithoutOwnerIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [TasksCreateOrConnectWithoutOwnerIdInput], {
    nullable: true
  })
  connectOrCreate?: TasksCreateOrConnectWithoutOwnerIdInput[] | undefined;

  @TypeGraphQL.Field(_type => TasksCreateManyOwnerIdInputEnvelope, {
    nullable: true
  })
  createMany?: TasksCreateManyOwnerIdInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TasksWhereUniqueInput], {
    nullable: true
  })
  connect?: TasksWhereUniqueInput[] | undefined;
}
