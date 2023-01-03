import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksCreateWithoutActionsInput } from "../inputs/TasksCreateWithoutActionsInput";
import { TasksWhereUniqueInput } from "../inputs/TasksWhereUniqueInput";

@TypeGraphQL.InputType("TasksCreateOrConnectWithoutActionsInput", {
  isAbstract: true
})
export class TasksCreateOrConnectWithoutActionsInput {
  @TypeGraphQL.Field(_type => TasksWhereUniqueInput, {
    nullable: false
  })
  where!: TasksWhereUniqueInput;

  @TypeGraphQL.Field(_type => TasksCreateWithoutActionsInput, {
    nullable: false
  })
  create!: TasksCreateWithoutActionsInput;
}
