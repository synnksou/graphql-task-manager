import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksCreateOrConnectWithoutActionsInput } from "../inputs/TasksCreateOrConnectWithoutActionsInput";
import { TasksCreateWithoutActionsInput } from "../inputs/TasksCreateWithoutActionsInput";
import { TasksUpdateWithoutActionsInput } from "../inputs/TasksUpdateWithoutActionsInput";
import { TasksUpsertWithoutActionsInput } from "../inputs/TasksUpsertWithoutActionsInput";
import { TasksWhereUniqueInput } from "../inputs/TasksWhereUniqueInput";

@TypeGraphQL.InputType("TasksUpdateOneRequiredWithoutActionsNestedInput", {
  isAbstract: true
})
export class TasksUpdateOneRequiredWithoutActionsNestedInput {
  @TypeGraphQL.Field(_type => TasksCreateWithoutActionsInput, {
    nullable: true
  })
  create?: TasksCreateWithoutActionsInput | undefined;

  @TypeGraphQL.Field(_type => TasksCreateOrConnectWithoutActionsInput, {
    nullable: true
  })
  connectOrCreate?: TasksCreateOrConnectWithoutActionsInput | undefined;

  @TypeGraphQL.Field(_type => TasksUpsertWithoutActionsInput, {
    nullable: true
  })
  upsert?: TasksUpsertWithoutActionsInput | undefined;

  @TypeGraphQL.Field(_type => TasksWhereUniqueInput, {
    nullable: true
  })
  connect?: TasksWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TasksUpdateWithoutActionsInput, {
    nullable: true
  })
  update?: TasksUpdateWithoutActionsInput | undefined;
}
