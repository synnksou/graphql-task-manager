import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateWithoutOwnerIdInput } from "../inputs/TaskCreateWithoutOwnerIdInput";
import { TaskUpdateWithoutOwnerIdInput } from "../inputs/TaskUpdateWithoutOwnerIdInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpsertWithWhereUniqueWithoutOwnerIdInput", {
  isAbstract: true
})
export class TaskUpsertWithWhereUniqueWithoutOwnerIdInput {
  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskUpdateWithoutOwnerIdInput, {
    nullable: false
  })
  update!: TaskUpdateWithoutOwnerIdInput;

  @TypeGraphQL.Field(_type => TaskCreateWithoutOwnerIdInput, {
    nullable: false
  })
  create!: TaskCreateWithoutOwnerIdInput;
}
