import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutAssigneesInput } from "../inputs/UserCreateNestedOneWithoutAssigneesInput";

@TypeGraphQL.InputType("AssigneesCreateWithoutTasksInput", {
  isAbstract: true
})
export class AssigneesCreateWithoutTasksInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutAssigneesInput, {
    nullable: false
  })
  User!: UserCreateNestedOneWithoutAssigneesInput;
}
