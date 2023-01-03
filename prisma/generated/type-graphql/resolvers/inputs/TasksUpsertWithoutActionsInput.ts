import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksCreateWithoutActionsInput } from "../inputs/TasksCreateWithoutActionsInput";
import { TasksUpdateWithoutActionsInput } from "../inputs/TasksUpdateWithoutActionsInput";

@TypeGraphQL.InputType("TasksUpsertWithoutActionsInput", {
  isAbstract: true
})
export class TasksUpsertWithoutActionsInput {
  @TypeGraphQL.Field(_type => TasksUpdateWithoutActionsInput, {
    nullable: false
  })
  update!: TasksUpdateWithoutActionsInput;

  @TypeGraphQL.Field(_type => TasksCreateWithoutActionsInput, {
    nullable: false
  })
  create!: TasksCreateWithoutActionsInput;
}
