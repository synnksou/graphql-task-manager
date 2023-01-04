import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCreateManyActionsInputEnvelope } from "../inputs/NotificationCreateManyActionsInputEnvelope";
import { NotificationCreateOrConnectWithoutActionsInput } from "../inputs/NotificationCreateOrConnectWithoutActionsInput";
import { NotificationCreateWithoutActionsInput } from "../inputs/NotificationCreateWithoutActionsInput";
import { NotificationScalarWhereInput } from "../inputs/NotificationScalarWhereInput";
import { NotificationUpdateManyWithWhereWithoutActionsInput } from "../inputs/NotificationUpdateManyWithWhereWithoutActionsInput";
import { NotificationUpdateWithWhereUniqueWithoutActionsInput } from "../inputs/NotificationUpdateWithWhereUniqueWithoutActionsInput";
import { NotificationUpsertWithWhereUniqueWithoutActionsInput } from "../inputs/NotificationUpsertWithWhereUniqueWithoutActionsInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";

@TypeGraphQL.InputType("NotificationUpdateManyWithoutActionsNestedInput", {
  isAbstract: true
})
export class NotificationUpdateManyWithoutActionsNestedInput {
  @TypeGraphQL.Field(_type => [NotificationCreateWithoutActionsInput], {
    nullable: true
  })
  create?: NotificationCreateWithoutActionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationCreateOrConnectWithoutActionsInput], {
    nullable: true
  })
  connectOrCreate?: NotificationCreateOrConnectWithoutActionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationUpsertWithWhereUniqueWithoutActionsInput], {
    nullable: true
  })
  upsert?: NotificationUpsertWithWhereUniqueWithoutActionsInput[] | undefined;

  @TypeGraphQL.Field(_type => NotificationCreateManyActionsInputEnvelope, {
    nullable: true
  })
  createMany?: NotificationCreateManyActionsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [NotificationWhereUniqueInput], {
    nullable: true
  })
  set?: NotificationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: NotificationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationWhereUniqueInput], {
    nullable: true
  })
  delete?: NotificationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationWhereUniqueInput], {
    nullable: true
  })
  connect?: NotificationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationUpdateWithWhereUniqueWithoutActionsInput], {
    nullable: true
  })
  update?: NotificationUpdateWithWhereUniqueWithoutActionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationUpdateManyWithWhereWithoutActionsInput], {
    nullable: true
  })
  updateMany?: NotificationUpdateManyWithWhereWithoutActionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: NotificationScalarWhereInput[] | undefined;
}
