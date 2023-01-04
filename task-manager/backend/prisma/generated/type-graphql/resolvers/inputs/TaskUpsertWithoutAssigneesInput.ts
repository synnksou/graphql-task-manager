import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateWithoutAssigneesInput } from "../inputs/TaskCreateWithoutAssigneesInput";
import { TaskUpdateWithoutAssigneesInput } from "../inputs/TaskUpdateWithoutAssigneesInput";

@TypeGraphQL.InputType("TaskUpsertWithoutAssigneesInput", {
  isAbstract: true
})
export class TaskUpsertWithoutAssigneesInput {
  @TypeGraphQL.Field(_type => TaskUpdateWithoutAssigneesInput, {
    nullable: false
  })
  update!: TaskUpdateWithoutAssigneesInput;

  @TypeGraphQL.Field(_type => TaskCreateWithoutAssigneesInput, {
    nullable: false
  })
  create!: TaskCreateWithoutAssigneesInput;
}
