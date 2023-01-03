import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksCreateWithoutOwnerIdInput } from "../inputs/TasksCreateWithoutOwnerIdInput";
import { TasksWhereUniqueInput } from "../inputs/TasksWhereUniqueInput";

@TypeGraphQL.InputType("TasksCreateOrConnectWithoutOwnerIdInput", {
  isAbstract: true
})
export class TasksCreateOrConnectWithoutOwnerIdInput {
  @TypeGraphQL.Field(_type => TasksWhereUniqueInput, {
    nullable: false
  })
  where!: TasksWhereUniqueInput;

  @TypeGraphQL.Field(_type => TasksCreateWithoutOwnerIdInput, {
    nullable: false
  })
  create!: TasksCreateWithoutOwnerIdInput;
}
