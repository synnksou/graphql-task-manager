import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateWithoutActionsInput } from "../inputs/TaskCreateWithoutActionsInput";
import { TaskUpdateWithoutActionsInput } from "../inputs/TaskUpdateWithoutActionsInput";

@TypeGraphQL.InputType("TaskUpsertWithoutActionsInput", {
  isAbstract: true
})
export class TaskUpsertWithoutActionsInput {
  @TypeGraphQL.Field(_type => TaskUpdateWithoutActionsInput, {
    nullable: false
  })
  update!: TaskUpdateWithoutActionsInput;

  @TypeGraphQL.Field(_type => TaskCreateWithoutActionsInput, {
    nullable: false
  })
  create!: TaskCreateWithoutActionsInput;
}
