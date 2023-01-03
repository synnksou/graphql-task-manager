import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksCreateWithoutOwnerIdInput } from "../inputs/TasksCreateWithoutOwnerIdInput";
import { TasksUpdateWithoutOwnerIdInput } from "../inputs/TasksUpdateWithoutOwnerIdInput";
import { TasksWhereUniqueInput } from "../inputs/TasksWhereUniqueInput";

@TypeGraphQL.InputType("TasksUpsertWithWhereUniqueWithoutOwnerIdInput", {
  isAbstract: true
})
export class TasksUpsertWithWhereUniqueWithoutOwnerIdInput {
  @TypeGraphQL.Field(_type => TasksWhereUniqueInput, {
    nullable: false
  })
  where!: TasksWhereUniqueInput;

  @TypeGraphQL.Field(_type => TasksUpdateWithoutOwnerIdInput, {
    nullable: false
  })
  update!: TasksUpdateWithoutOwnerIdInput;

  @TypeGraphQL.Field(_type => TasksCreateWithoutOwnerIdInput, {
    nullable: false
  })
  create!: TasksCreateWithoutOwnerIdInput;
}
