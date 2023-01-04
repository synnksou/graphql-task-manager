import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateNestedOneWithoutAssigneesInput } from "../inputs/TaskCreateNestedOneWithoutAssigneesInput";
import { UserCreateNestedOneWithoutAssigneesInput } from "../inputs/UserCreateNestedOneWithoutAssigneesInput";

@TypeGraphQL.InputType("AssigneeCreateInput", {
  isAbstract: true
})
export class AssigneeCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutAssigneesInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutAssigneesInput;

  @TypeGraphQL.Field(_type => TaskCreateNestedOneWithoutAssigneesInput, {
    nullable: false
  })
  task!: TaskCreateNestedOneWithoutAssigneesInput;
}
