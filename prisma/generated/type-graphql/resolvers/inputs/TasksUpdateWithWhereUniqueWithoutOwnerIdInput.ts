import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksUpdateWithoutOwnerIdInput } from "../inputs/TasksUpdateWithoutOwnerIdInput";
import { TasksWhereUniqueInput } from "../inputs/TasksWhereUniqueInput";

@TypeGraphQL.InputType("TasksUpdateWithWhereUniqueWithoutOwnerIdInput", {
  isAbstract: true
})
export class TasksUpdateWithWhereUniqueWithoutOwnerIdInput {
  @TypeGraphQL.Field(_type => TasksWhereUniqueInput, {
    nullable: false
  })
  where!: TasksWhereUniqueInput;

  @TypeGraphQL.Field(_type => TasksUpdateWithoutOwnerIdInput, {
    nullable: false
  })
  data!: TasksUpdateWithoutOwnerIdInput;
}
