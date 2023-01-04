import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutTaskssInput } from "../inputs/UserCreateWithoutTaskssInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutTaskssInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutTaskssInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutTaskssInput, {
    nullable: false
  })
  create!: UserCreateWithoutTaskssInput;
}
