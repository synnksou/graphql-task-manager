import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateWithoutActionsInput } from "../inputs/TaskCreateWithoutActionsInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateOrConnectWithoutActionsInput", {
  isAbstract: true
})
export class TaskCreateOrConnectWithoutActionsInput {
  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskCreateWithoutActionsInput, {
    nullable: false
  })
  create!: TaskCreateWithoutActionsInput;
}
