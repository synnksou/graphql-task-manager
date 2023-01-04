import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateOrConnectWithoutAssigneesInput } from "../inputs/TaskCreateOrConnectWithoutAssigneesInput";
import { TaskCreateWithoutAssigneesInput } from "../inputs/TaskCreateWithoutAssigneesInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateNestedOneWithoutAssigneesInput", {
  isAbstract: true
})
export class TaskCreateNestedOneWithoutAssigneesInput {
  @TypeGraphQL.Field(_type => TaskCreateWithoutAssigneesInput, {
    nullable: true
  })
  create?: TaskCreateWithoutAssigneesInput | undefined;

  @TypeGraphQL.Field(_type => TaskCreateOrConnectWithoutAssigneesInput, {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutAssigneesInput | undefined;

  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: true
  })
  connect?: TaskWhereUniqueInput | undefined;
}
