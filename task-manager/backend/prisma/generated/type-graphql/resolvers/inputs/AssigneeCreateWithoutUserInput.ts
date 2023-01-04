import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateNestedOneWithoutAssigneesInput } from "../inputs/TaskCreateNestedOneWithoutAssigneesInput";

@TypeGraphQL.InputType("AssigneeCreateWithoutUserInput", {
  isAbstract: true
})
export class AssigneeCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => TaskCreateNestedOneWithoutAssigneesInput, {
    nullable: false
  })
  task!: TaskCreateNestedOneWithoutAssigneesInput;
}
