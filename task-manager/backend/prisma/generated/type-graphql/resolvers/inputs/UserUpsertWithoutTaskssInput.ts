import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutTaskssInput } from "../inputs/UserCreateWithoutTaskssInput";
import { UserUpdateWithoutTaskssInput } from "../inputs/UserUpdateWithoutTaskssInput";

@TypeGraphQL.InputType("UserUpsertWithoutTaskssInput", {
  isAbstract: true
})
export class UserUpsertWithoutTaskssInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutTaskssInput, {
    nullable: false
  })
  update!: UserUpdateWithoutTaskssInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutTaskssInput, {
    nullable: false
  })
  create!: UserCreateWithoutTaskssInput;
}
