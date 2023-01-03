import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksCreateOrConnectWithoutAssigneesInput } from "../inputs/TasksCreateOrConnectWithoutAssigneesInput";
import { TasksCreateWithoutAssigneesInput } from "../inputs/TasksCreateWithoutAssigneesInput";
import { TasksUpdateWithoutAssigneesInput } from "../inputs/TasksUpdateWithoutAssigneesInput";
import { TasksUpsertWithoutAssigneesInput } from "../inputs/TasksUpsertWithoutAssigneesInput";
import { TasksWhereUniqueInput } from "../inputs/TasksWhereUniqueInput";

@TypeGraphQL.InputType("TasksUpdateOneRequiredWithoutAssigneesNestedInput", {
  isAbstract: true
})
export class TasksUpdateOneRequiredWithoutAssigneesNestedInput {
  @TypeGraphQL.Field(_type => TasksCreateWithoutAssigneesInput, {
    nullable: true
  })
  create?: TasksCreateWithoutAssigneesInput | undefined;

  @TypeGraphQL.Field(_type => TasksCreateOrConnectWithoutAssigneesInput, {
    nullable: true
  })
  connectOrCreate?: TasksCreateOrConnectWithoutAssigneesInput | undefined;

  @TypeGraphQL.Field(_type => TasksUpsertWithoutAssigneesInput, {
    nullable: true
  })
  upsert?: TasksUpsertWithoutAssigneesInput | undefined;

  @TypeGraphQL.Field(_type => TasksWhereUniqueInput, {
    nullable: true
  })
  connect?: TasksWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TasksUpdateWithoutAssigneesInput, {
    nullable: true
  })
  update?: TasksUpdateWithoutAssigneesInput | undefined;
}
