import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutAssigneesInput } from "../inputs/UserCreateWithoutAssigneesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutAssigneesInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutAssigneesInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutAssigneesInput, {
    nullable: false
  })
  create!: UserCreateWithoutAssigneesInput;
}
