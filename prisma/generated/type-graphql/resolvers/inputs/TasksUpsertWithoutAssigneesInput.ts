import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksCreateWithoutAssigneesInput } from "../inputs/TasksCreateWithoutAssigneesInput";
import { TasksUpdateWithoutAssigneesInput } from "../inputs/TasksUpdateWithoutAssigneesInput";

@TypeGraphQL.InputType("TasksUpsertWithoutAssigneesInput", {
  isAbstract: true
})
export class TasksUpsertWithoutAssigneesInput {
  @TypeGraphQL.Field(_type => TasksUpdateWithoutAssigneesInput, {
    nullable: false
  })
  update!: TasksUpdateWithoutAssigneesInput;

  @TypeGraphQL.Field(_type => TasksCreateWithoutAssigneesInput, {
    nullable: false
  })
  create!: TasksCreateWithoutAssigneesInput;
}
