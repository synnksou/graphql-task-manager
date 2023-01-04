import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutTaskssInput } from "../inputs/UserCreateOrConnectWithoutTaskssInput";
import { UserCreateWithoutTaskssInput } from "../inputs/UserCreateWithoutTaskssInput";
import { UserUpdateWithoutTaskssInput } from "../inputs/UserUpdateWithoutTaskssInput";
import { UserUpsertWithoutTaskssInput } from "../inputs/UserUpsertWithoutTaskssInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutTaskssNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutTaskssNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutTaskssInput, {
    nullable: true
  })
  create?: UserCreateWithoutTaskssInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTaskssInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTaskssInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutTaskssInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutTaskssInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutTaskssInput, {
    nullable: true
  })
  update?: UserUpdateWithoutTaskssInput | undefined;
}
