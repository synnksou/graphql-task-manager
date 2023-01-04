import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateOrConnectWithoutAssigneesInput } from "../inputs/TaskCreateOrConnectWithoutAssigneesInput";
import { TaskCreateWithoutAssigneesInput } from "../inputs/TaskCreateWithoutAssigneesInput";
import { TaskUpdateWithoutAssigneesInput } from "../inputs/TaskUpdateWithoutAssigneesInput";
import { TaskUpsertWithoutAssigneesInput } from "../inputs/TaskUpsertWithoutAssigneesInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpdateOneRequiredWithoutAssigneesNestedInput", {
  isAbstract: true
})
export class TaskUpdateOneRequiredWithoutAssigneesNestedInput {
  @TypeGraphQL.Field(_type => TaskCreateWithoutAssigneesInput, {
    nullable: true
  })
  create?: TaskCreateWithoutAssigneesInput | undefined;

  @TypeGraphQL.Field(_type => TaskCreateOrConnectWithoutAssigneesInput, {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutAssigneesInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpsertWithoutAssigneesInput, {
    nullable: true
  })
  upsert?: TaskUpsertWithoutAssigneesInput | undefined;

  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: true
  })
  connect?: TaskWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateWithoutAssigneesInput, {
    nullable: true
  })
  update?: TaskUpdateWithoutAssigneesInput | undefined;
}
