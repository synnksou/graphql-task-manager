import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationsCreateManyActionsInputEnvelope } from "../inputs/NotificationsCreateManyActionsInputEnvelope";
import { NotificationsCreateOrConnectWithoutActionsInput } from "../inputs/NotificationsCreateOrConnectWithoutActionsInput";
import { NotificationsCreateWithoutActionsInput } from "../inputs/NotificationsCreateWithoutActionsInput";
import { NotificationsScalarWhereInput } from "../inputs/NotificationsScalarWhereInput";
import { NotificationsUpdateManyWithWhereWithoutActionsInput } from "../inputs/NotificationsUpdateManyWithWhereWithoutActionsInput";
import { NotificationsUpdateWithWhereUniqueWithoutActionsInput } from "../inputs/NotificationsUpdateWithWhereUniqueWithoutActionsInput";
import { NotificationsUpsertWithWhereUniqueWithoutActionsInput } from "../inputs/NotificationsUpsertWithWhereUniqueWithoutActionsInput";
import { NotificationsWhereUniqueInput } from "../inputs/NotificationsWhereUniqueInput";

@TypeGraphQL.InputType("NotificationsUpdateManyWithoutActionsNestedInput", {
  isAbstract: true
})
export class NotificationsUpdateManyWithoutActionsNestedInput {
  @TypeGraphQL.Field(_type => [NotificationsCreateWithoutActionsInput], {
    nullable: true
  })
  create?: NotificationsCreateWithoutActionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationsCreateOrConnectWithoutActionsInput], {
    nullable: true
  })
  connectOrCreate?: NotificationsCreateOrConnectWithoutActionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationsUpsertWithWhereUniqueWithoutActionsInput], {
    nullable: true
  })
  upsert?: NotificationsUpsertWithWhereUniqueWithoutActionsInput[] | undefined;

  @TypeGraphQL.Field(_type => NotificationsCreateManyActionsInputEnvelope, {
    nullable: true
  })
  createMany?: NotificationsCreateManyActionsInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [NotificationsUpdateWithWhereUniqueWithoutActionsInput], {
    nullable: true
  })
  update?: NotificationsUpdateWithWhereUniqueWithoutActionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationsUpdateManyWithWhereWithoutActionsInput], {
    nullable: true
  })
  updateMany?: NotificationsUpdateManyWithWhereWithoutActionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: NotificationsScalarWhereInput[] | undefined;
}
