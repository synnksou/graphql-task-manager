import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateOrConnectWithoutActionsInput } from "../inputs/TaskCreateOrConnectWithoutActionsInput";
import { TaskCreateWithoutActionsInput } from "../inputs/TaskCreateWithoutActionsInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateNestedOneWithoutActionsInput", {
  isAbstract: true
})
export class TaskCreateNestedOneWithoutActionsInput {
  @TypeGraphQL.Field(_type => TaskCreateWithoutActionsInput, {
    nullable: true
  })
  create?: TaskCreateWithoutActionsInput | undefined;

  @TypeGraphQL.Field(_type => TaskCreateOrConnectWithoutActionsInput, {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutActionsInput | undefined;

  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: true
  })
  connect?: TaskWhereUniqueInput | undefined;
}
