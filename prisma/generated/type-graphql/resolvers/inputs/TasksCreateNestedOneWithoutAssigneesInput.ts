import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksCreateOrConnectWithoutAssigneesInput } from "../inputs/TasksCreateOrConnectWithoutAssigneesInput";
import { TasksCreateWithoutAssigneesInput } from "../inputs/TasksCreateWithoutAssigneesInput";
import { TasksWhereUniqueInput } from "../inputs/TasksWhereUniqueInput";

@TypeGraphQL.InputType("TasksCreateNestedOneWithoutAssigneesInput", {
  isAbstract: true
})
export class TasksCreateNestedOneWithoutAssigneesInput {
  @TypeGraphQL.Field(_type => TasksCreateWithoutAssigneesInput, {
    nullable: true
  })
  create?: TasksCreateWithoutAssigneesInput | undefined;

  @TypeGraphQL.Field(_type => TasksCreateOrConnectWithoutAssigneesInput, {
    nullable: true
  })
  connectOrCreate?: TasksCreateOrConnectWithoutAssigneesInput | undefined;

  @TypeGraphQL.Field(_type => TasksWhereUniqueInput, {
    nullable: true
  })
  connect?: TasksWhereUniqueInput | undefined;
}
