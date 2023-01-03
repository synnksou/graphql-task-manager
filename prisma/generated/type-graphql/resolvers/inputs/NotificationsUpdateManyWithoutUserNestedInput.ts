import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationsCreateManyUserInputEnvelope } from "../inputs/NotificationsCreateManyUserInputEnvelope";
import { NotificationsCreateOrConnectWithoutUserInput } from "../inputs/NotificationsCreateOrConnectWithoutUserInput";
import { NotificationsCreateWithoutUserInput } from "../inputs/NotificationsCreateWithoutUserInput";
import { NotificationsScalarWhereInput } from "../inputs/NotificationsScalarWhereInput";
import { NotificationsUpdateManyWithWhereWithoutUserInput } from "../inputs/NotificationsUpdateManyWithWhereWithoutUserInput";
import { NotificationsUpdateWithWhereUniqueWithoutUserInput } from "../inputs/NotificationsUpdateWithWhereUniqueWithoutUserInput";
import { NotificationsUpsertWithWhereUniqueWithoutUserInput } from "../inputs/NotificationsUpsertWithWhereUniqueWithoutUserInput";
import { NotificationsWhereUniqueInput } from "../inputs/NotificationsWhereUniqueInput";

@TypeGraphQL.InputType("NotificationsUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class NotificationsUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [NotificationsCreateWithoutUserInput], {
    nullable: true
  })
  create?: NotificationsCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationsCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: NotificationsCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationsUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: NotificationsUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => NotificationsCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: NotificationsCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [NotificationsWhereUniqueInput], {
    nullable: true
  })
  set?: NotificationsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: NotificationsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationsWhereUniqueInput], {
    nullable: true
  })
  delete?: NotificationsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationsWhereUniqueInput], {
    nullable: true
  })
  connect?: NotificationsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationsUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: NotificationsUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationsUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: NotificationsUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: NotificationsScalarWhereInput[] | undefined;
}
