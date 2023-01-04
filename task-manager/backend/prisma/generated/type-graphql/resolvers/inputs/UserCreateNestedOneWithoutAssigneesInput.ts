import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutAssigneesInput } from "../inputs/UserCreateOrConnectWithoutAssigneesInput";
import { UserCreateWithoutAssigneesInput } from "../inputs/UserCreateWithoutAssigneesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutAssigneesInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutAssigneesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutAssigneesInput, {
    nullable: true
  })
  create?: UserCreateWithoutAssigneesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutAssigneesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutAssigneesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
