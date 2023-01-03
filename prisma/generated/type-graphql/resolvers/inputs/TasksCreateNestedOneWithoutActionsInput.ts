import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksCreateOrConnectWithoutActionsInput } from "../inputs/TasksCreateOrConnectWithoutActionsInput";
import { TasksCreateWithoutActionsInput } from "../inputs/TasksCreateWithoutActionsInput";
import { TasksWhereUniqueInput } from "../inputs/TasksWhereUniqueInput";

@TypeGraphQL.InputType("TasksCreateNestedOneWithoutActionsInput", {
  isAbstract: true
})
export class TasksCreateNestedOneWithoutActionsInput {
  @TypeGraphQL.Field(_type => TasksCreateWithoutActionsInput, {
    nullable: true
  })
  create?: TasksCreateWithoutActionsInput | undefined;

  @TypeGraphQL.Field(_type => TasksCreateOrConnectWithoutActionsInput, {
    nullable: true
  })
  connectOrCreate?: TasksCreateOrConnectWithoutActionsInput | undefined;

  @TypeGraphQL.Field(_type => TasksWhereUniqueInput, {
    nullable: true
  })
  connect?: TasksWhereUniqueInput | undefined;
}
