import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksCreateOrConnectWithoutCommentsInput } from "../inputs/TasksCreateOrConnectWithoutCommentsInput";
import { TasksCreateWithoutCommentsInput } from "../inputs/TasksCreateWithoutCommentsInput";
import { TasksUpdateWithoutCommentsInput } from "../inputs/TasksUpdateWithoutCommentsInput";
import { TasksUpsertWithoutCommentsInput } from "../inputs/TasksUpsertWithoutCommentsInput";
import { TasksWhereUniqueInput } from "../inputs/TasksWhereUniqueInput";

@TypeGraphQL.InputType("TasksUpdateOneRequiredWithoutCommentsNestedInput", {
  isAbstract: true
})
export class TasksUpdateOneRequiredWithoutCommentsNestedInput {
  @TypeGraphQL.Field(_type => TasksCreateWithoutCommentsInput, {
    nullable: true
  })
  create?: TasksCreateWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => TasksCreateOrConnectWithoutCommentsInput, {
    nullable: true
  })
  connectOrCreate?: TasksCreateOrConnectWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => TasksUpsertWithoutCommentsInput, {
    nullable: true
  })
  upsert?: TasksUpsertWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => TasksWhereUniqueInput, {
    nullable: true
  })
  connect?: TasksWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TasksUpdateWithoutCommentsInput, {
    nullable: true
  })
  update?: TasksUpdateWithoutCommentsInput | undefined;
}
