import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksCreateNestedOneWithoutAssigneesInput } from "../inputs/TasksCreateNestedOneWithoutAssigneesInput";

@TypeGraphQL.InputType("AssigneesCreateWithoutUserInput", {
  isAbstract: true
})
export class AssigneesCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => TasksCreateNestedOneWithoutAssigneesInput, {
    nullable: false
  })
  Tasks!: TasksCreateNestedOneWithoutAssigneesInput;
}
