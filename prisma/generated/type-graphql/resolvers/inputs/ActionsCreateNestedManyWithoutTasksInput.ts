import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionsCreateManyTasksInputEnvelope } from "../inputs/ActionsCreateManyTasksInputEnvelope";
import { ActionsCreateOrConnectWithoutTasksInput } from "../inputs/ActionsCreateOrConnectWithoutTasksInput";
import { ActionsCreateWithoutTasksInput } from "../inputs/ActionsCreateWithoutTasksInput";
import { ActionsWhereUniqueInput } from "../inputs/ActionsWhereUniqueInput";

@TypeGraphQL.InputType("ActionsCreateNestedManyWithoutTasksInput", {
  isAbstract: true
})
export class ActionsCreateNestedManyWithoutTasksInput {
  @TypeGraphQL.Field(_type => [ActionsCreateWithoutTasksInput], {
    nullable: true
  })
  create?: ActionsCreateWithoutTasksInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionsCreateOrConnectWithoutTasksInput], {
    nullable: true
  })
  connectOrCreate?: ActionsCreateOrConnectWithoutTasksInput[] | undefined;

  @TypeGraphQL.Field(_type => ActionsCreateManyTasksInputEnvelope, {
    nullable: true
  })
  createMany?: ActionsCreateManyTasksInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ActionsWhereUniqueInput], {
    nullable: true
  })
  connect?: ActionsWhereUniqueInput[] | undefined;
}
