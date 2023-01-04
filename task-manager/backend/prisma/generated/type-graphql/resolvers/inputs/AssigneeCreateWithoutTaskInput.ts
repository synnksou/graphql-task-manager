import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutAssigneesInput } from "../inputs/UserCreateNestedOneWithoutAssigneesInput";

@TypeGraphQL.InputType("AssigneeCreateWithoutTaskInput", {
  isAbstract: true
})
export class AssigneeCreateWithoutTaskInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutAssigneesInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutAssigneesInput;
}
