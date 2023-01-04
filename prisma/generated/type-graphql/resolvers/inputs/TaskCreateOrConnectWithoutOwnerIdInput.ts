import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateWithoutOwnerIdInput } from "../inputs/TaskCreateWithoutOwnerIdInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateOrConnectWithoutOwnerIdInput", {
  isAbstract: true
})
export class TaskCreateOrConnectWithoutOwnerIdInput {
  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskCreateWithoutOwnerIdInput, {
    nullable: false
  })
  create!: TaskCreateWithoutOwnerIdInput;
}
