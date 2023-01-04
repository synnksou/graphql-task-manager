import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateWithoutAssigneesInput } from "../inputs/TaskCreateWithoutAssigneesInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateOrConnectWithoutAssigneesInput", {
  isAbstract: true
})
export class TaskCreateOrConnectWithoutAssigneesInput {
  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskCreateWithoutAssigneesInput, {
    nullable: false
  })
  create!: TaskCreateWithoutAssigneesInput;
}
