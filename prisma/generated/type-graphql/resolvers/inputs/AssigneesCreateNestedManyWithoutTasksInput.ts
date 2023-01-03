import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneesCreateManyTasksInputEnvelope } from "../inputs/AssigneesCreateManyTasksInputEnvelope";
import { AssigneesCreateOrConnectWithoutTasksInput } from "../inputs/AssigneesCreateOrConnectWithoutTasksInput";
import { AssigneesCreateWithoutTasksInput } from "../inputs/AssigneesCreateWithoutTasksInput";
import { AssigneesWhereUniqueInput } from "../inputs/AssigneesWhereUniqueInput";

@TypeGraphQL.InputType("AssigneesCreateNestedManyWithoutTasksInput", {
  isAbstract: true
})
export class AssigneesCreateNestedManyWithoutTasksInput {
  @TypeGraphQL.Field(_type => [AssigneesCreateWithoutTasksInput], {
    nullable: true
  })
  create?: AssigneesCreateWithoutTasksInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneesCreateOrConnectWithoutTasksInput], {
    nullable: true
  })
  connectOrCreate?: AssigneesCreateOrConnectWithoutTasksInput[] | undefined;

  @TypeGraphQL.Field(_type => AssigneesCreateManyTasksInputEnvelope, {
    nullable: true
  })
  createMany?: AssigneesCreateManyTasksInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AssigneesWhereUniqueInput], {
    nullable: true
  })
  connect?: AssigneesWhereUniqueInput[] | undefined;
}
