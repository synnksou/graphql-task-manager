import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksCreateWithoutCommentsInput } from "../inputs/TasksCreateWithoutCommentsInput";
import { TasksWhereUniqueInput } from "../inputs/TasksWhereUniqueInput";

@TypeGraphQL.InputType("TasksCreateOrConnectWithoutCommentsInput", {
  isAbstract: true
})
export class TasksCreateOrConnectWithoutCommentsInput {
  @TypeGraphQL.Field(_type => TasksWhereUniqueInput, {
    nullable: false
  })
  where!: TasksWhereUniqueInput;

  @TypeGraphQL.Field(_type => TasksCreateWithoutCommentsInput, {
    nullable: false
  })
  create!: TasksCreateWithoutCommentsInput;
}
