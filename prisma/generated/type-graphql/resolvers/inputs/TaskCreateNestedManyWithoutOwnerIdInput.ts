import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateManyOwnerIdInputEnvelope } from "../inputs/TaskCreateManyOwnerIdInputEnvelope";
import { TaskCreateOrConnectWithoutOwnerIdInput } from "../inputs/TaskCreateOrConnectWithoutOwnerIdInput";
import { TaskCreateWithoutOwnerIdInput } from "../inputs/TaskCreateWithoutOwnerIdInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateNestedManyWithoutOwnerIdInput", {
  isAbstract: true
})
export class TaskCreateNestedManyWithoutOwnerIdInput {
  @TypeGraphQL.Field(_type => [TaskCreateWithoutOwnerIdInput], {
    nullable: true
  })
  create?: TaskCreateWithoutOwnerIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutOwnerIdInput], {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutOwnerIdInput[] | undefined;

  @TypeGraphQL.Field(_type => TaskCreateManyOwnerIdInputEnvelope, {
    nullable: true
  })
  createMany?: TaskCreateManyOwnerIdInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  connect?: TaskWhereUniqueInput[] | undefined;
}
