import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationsCreateManyUserInputEnvelope } from "../inputs/NotificationsCreateManyUserInputEnvelope";
import { NotificationsCreateOrConnectWithoutUserInput } from "../inputs/NotificationsCreateOrConnectWithoutUserInput";
import { NotificationsCreateWithoutUserInput } from "../inputs/NotificationsCreateWithoutUserInput";
import { NotificationsWhereUniqueInput } from "../inputs/NotificationsWhereUniqueInput";

@TypeGraphQL.InputType("NotificationsCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class NotificationsCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [NotificationsCreateWithoutUserInput], {
    nullable: true
  })
  create?: NotificationsCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationsCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: NotificationsCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => NotificationsCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: NotificationsCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [NotificationsWhereUniqueInput], {
    nullable: true
  })
  connect?: NotificationsWhereUniqueInput[] | undefined;
}
