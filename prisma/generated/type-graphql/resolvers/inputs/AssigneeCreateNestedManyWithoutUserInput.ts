import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneeCreateManyUserInputEnvelope } from "../inputs/AssigneeCreateManyUserInputEnvelope";
import { AssigneeCreateOrConnectWithoutUserInput } from "../inputs/AssigneeCreateOrConnectWithoutUserInput";
import { AssigneeCreateWithoutUserInput } from "../inputs/AssigneeCreateWithoutUserInput";
import { AssigneeWhereUniqueInput } from "../inputs/AssigneeWhereUniqueInput";

@TypeGraphQL.InputType("AssigneeCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class AssigneeCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [AssigneeCreateWithoutUserInput], {
    nullable: true
  })
  create?: AssigneeCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneeCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: AssigneeCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => AssigneeCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: AssigneeCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AssigneeWhereUniqueInput], {
    nullable: true
  })
  connect?: AssigneeWhereUniqueInput[] | undefined;
}
