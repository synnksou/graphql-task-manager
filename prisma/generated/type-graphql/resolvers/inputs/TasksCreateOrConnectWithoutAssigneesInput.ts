import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksCreateWithoutAssigneesInput } from "../inputs/TasksCreateWithoutAssigneesInput";
import { TasksWhereUniqueInput } from "../inputs/TasksWhereUniqueInput";

@TypeGraphQL.InputType("TasksCreateOrConnectWithoutAssigneesInput", {
  isAbstract: true
})
export class TasksCreateOrConnectWithoutAssigneesInput {
  @TypeGraphQL.Field(_type => TasksWhereUniqueInput, {
    nullable: false
  })
  where!: TasksWhereUniqueInput;

  @TypeGraphQL.Field(_type => TasksCreateWithoutAssigneesInput, {
    nullable: false
  })
  create!: TasksCreateWithoutAssigneesInput;
}
