import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneeCreateManyTaskInputEnvelope } from "../inputs/AssigneeCreateManyTaskInputEnvelope";
import { AssigneeCreateOrConnectWithoutTaskInput } from "../inputs/AssigneeCreateOrConnectWithoutTaskInput";
import { AssigneeCreateWithoutTaskInput } from "../inputs/AssigneeCreateWithoutTaskInput";
import { AssigneeWhereUniqueInput } from "../inputs/AssigneeWhereUniqueInput";

@TypeGraphQL.InputType("AssigneeCreateNestedManyWithoutTaskInput", {
  isAbstract: true
})
export class AssigneeCreateNestedManyWithoutTaskInput {
  @TypeGraphQL.Field(_type => [AssigneeCreateWithoutTaskInput], {
    nullable: true
  })
  create?: AssigneeCreateWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneeCreateOrConnectWithoutTaskInput], {
    nullable: true
  })
  connectOrCreate?: AssigneeCreateOrConnectWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => AssigneeCreateManyTaskInputEnvelope, {
    nullable: true
  })
  createMany?: AssigneeCreateManyTaskInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AssigneeWhereUniqueInput], {
    nullable: true
  })
  connect?: AssigneeWhereUniqueInput[] | undefined;
}
