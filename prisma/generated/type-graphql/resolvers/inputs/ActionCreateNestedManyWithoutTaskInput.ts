import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionCreateManyTaskInputEnvelope } from "../inputs/ActionCreateManyTaskInputEnvelope";
import { ActionCreateOrConnectWithoutTaskInput } from "../inputs/ActionCreateOrConnectWithoutTaskInput";
import { ActionCreateWithoutTaskInput } from "../inputs/ActionCreateWithoutTaskInput";
import { ActionWhereUniqueInput } from "../inputs/ActionWhereUniqueInput";

@TypeGraphQL.InputType("ActionCreateNestedManyWithoutTaskInput", {
  isAbstract: true
})
export class ActionCreateNestedManyWithoutTaskInput {
  @TypeGraphQL.Field(_type => [ActionCreateWithoutTaskInput], {
    nullable: true
  })
  create?: ActionCreateWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionCreateOrConnectWithoutTaskInput], {
    nullable: true
  })
  connectOrCreate?: ActionCreateOrConnectWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => ActionCreateManyTaskInputEnvelope, {
    nullable: true
  })
  createMany?: ActionCreateManyTaskInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ActionWhereUniqueInput], {
    nullable: true
  })
  connect?: ActionWhereUniqueInput[] | undefined;
}
