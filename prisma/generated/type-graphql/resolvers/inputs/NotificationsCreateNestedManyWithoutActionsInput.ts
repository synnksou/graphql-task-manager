import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationsCreateManyActionsInputEnvelope } from "../inputs/NotificationsCreateManyActionsInputEnvelope";
import { NotificationsCreateOrConnectWithoutActionsInput } from "../inputs/NotificationsCreateOrConnectWithoutActionsInput";
import { NotificationsCreateWithoutActionsInput } from "../inputs/NotificationsCreateWithoutActionsInput";
import { NotificationsWhereUniqueInput } from "../inputs/NotificationsWhereUniqueInput";

@TypeGraphQL.InputType("NotificationsCreateNestedManyWithoutActionsInput", {
  isAbstract: true
})
export class NotificationsCreateNestedManyWithoutActionsInput {
  @TypeGraphQL.Field(_type => [NotificationsCreateWithoutActionsInput], {
    nullable: true
  })
  create?: NotificationsCreateWithoutActionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationsCreateOrConnectWithoutActionsInput], {
    nullable: true
  })
  connectOrCreate?: NotificationsCreateOrConnectWithoutActionsInput[] | undefined;

  @TypeGraphQL.Field(_type => NotificationsCreateManyActionsInputEnvelope, {
    nullable: true
  })
  createMany?: NotificationsCreateManyActionsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [NotificationsWhereUniqueInput], {
    nullable: true
  })
  connect?: NotificationsWhereUniqueInput[] | undefined;
}
