import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutAssigneesInput } from "../inputs/UserCreateWithoutAssigneesInput";
import { UserUpdateWithoutAssigneesInput } from "../inputs/UserUpdateWithoutAssigneesInput";

@TypeGraphQL.InputType("UserUpsertWithoutAssigneesInput", {
  isAbstract: true
})
export class UserUpsertWithoutAssigneesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutAssigneesInput, {
    nullable: false
  })
  update!: UserUpdateWithoutAssigneesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutAssigneesInput, {
    nullable: false
  })
  create!: UserCreateWithoutAssigneesInput;
}
