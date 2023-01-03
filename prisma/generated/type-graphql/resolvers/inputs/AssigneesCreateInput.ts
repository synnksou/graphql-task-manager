import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksCreateNestedOneWithoutAssigneesInput } from "../inputs/TasksCreateNestedOneWithoutAssigneesInput";
import { UserCreateNestedOneWithoutAssigneesInput } from "../inputs/UserCreateNestedOneWithoutAssigneesInput";

@TypeGraphQL.InputType("AssigneesCreateInput", {
  isAbstract: true
})
export class AssigneesCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutAssigneesInput, {
    nullable: false
  })
  User!: UserCreateNestedOneWithoutAssigneesInput;

  @TypeGraphQL.Field(_type => TasksCreateNestedOneWithoutAssigneesInput, {
    nullable: false
  })
  Tasks!: TasksCreateNestedOneWithoutAssigneesInput;
}
