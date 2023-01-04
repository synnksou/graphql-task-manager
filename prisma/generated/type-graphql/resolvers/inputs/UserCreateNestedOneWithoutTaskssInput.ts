import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutTaskssInput } from "../inputs/UserCreateOrConnectWithoutTaskssInput";
import { UserCreateWithoutTaskssInput } from "../inputs/UserCreateWithoutTaskssInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutTaskssInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutTaskssInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutTaskssInput, {
    nullable: true
  })
  create?: UserCreateWithoutTaskssInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTaskssInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTaskssInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
