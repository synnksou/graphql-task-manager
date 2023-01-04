import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCreateManyActionsInputEnvelope } from "../inputs/NotificationCreateManyActionsInputEnvelope";
import { NotificationCreateOrConnectWithoutActionsInput } from "../inputs/NotificationCreateOrConnectWithoutActionsInput";
import { NotificationCreateWithoutActionsInput } from "../inputs/NotificationCreateWithoutActionsInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";

@TypeGraphQL.InputType("NotificationCreateNestedManyWithoutActionsInput", {
  isAbstract: true
})
export class NotificationCreateNestedManyWithoutActionsInput {
  @TypeGraphQL.Field(_type => [NotificationCreateWithoutActionsInput], {
    nullable: true
  })
  create?: NotificationCreateWithoutActionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationCreateOrConnectWithoutActionsInput], {
    nullable: true
  })
  connectOrCreate?: NotificationCreateOrConnectWithoutActionsInput[] | undefined;

  @TypeGraphQL.Field(_type => NotificationCreateManyActionsInputEnvelope, {
    nullable: true
  })
  createMany?: NotificationCreateManyActionsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [NotificationWhereUniqueInput], {
    nullable: true
  })
  connect?: NotificationWhereUniqueInput[] | undefined;
}
