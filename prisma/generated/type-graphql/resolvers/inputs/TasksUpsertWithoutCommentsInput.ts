import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksCreateWithoutCommentsInput } from "../inputs/TasksCreateWithoutCommentsInput";
import { TasksUpdateWithoutCommentsInput } from "../inputs/TasksUpdateWithoutCommentsInput";

@TypeGraphQL.InputType("TasksUpsertWithoutCommentsInput", {
  isAbstract: true
})
export class TasksUpsertWithoutCommentsInput {
  @TypeGraphQL.Field(_type => TasksUpdateWithoutCommentsInput, {
    nullable: false
  })
  update!: TasksUpdateWithoutCommentsInput;

  @TypeGraphQL.Field(_type => TasksCreateWithoutCommentsInput, {
    nullable: false
  })
  create!: TasksCreateWithoutCommentsInput;
}
