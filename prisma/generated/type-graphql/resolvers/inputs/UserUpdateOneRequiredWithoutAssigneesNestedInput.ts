import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutAssigneesInput } from "../inputs/UserCreateOrConnectWithoutAssigneesInput";
import { UserCreateWithoutAssigneesInput } from "../inputs/UserCreateWithoutAssigneesInput";
import { UserUpdateWithoutAssigneesInput } from "../inputs/UserUpdateWithoutAssigneesInput";
import { UserUpsertWithoutAssigneesInput } from "../inputs/UserUpsertWithoutAssigneesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutAssigneesNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutAssigneesNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutAssigneesInput, {
    nullable: true
  })
  create?: UserCreateWithoutAssigneesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutAssigneesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutAssigneesInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutAssigneesInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutAssigneesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutAssigneesInput, {
    nullable: true
  })
  update?: UserUpdateWithoutAssigneesInput | undefined;
}
