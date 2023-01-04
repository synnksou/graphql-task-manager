import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateOrConnectWithoutCommentsInput } from "../inputs/TaskCreateOrConnectWithoutCommentsInput";
import { TaskCreateWithoutCommentsInput } from "../inputs/TaskCreateWithoutCommentsInput";
import { TaskUpdateWithoutCommentsInput } from "../inputs/TaskUpdateWithoutCommentsInput";
import { TaskUpsertWithoutCommentsInput } from "../inputs/TaskUpsertWithoutCommentsInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpdateOneRequiredWithoutCommentsNestedInput", {
  isAbstract: true
})
export class TaskUpdateOneRequiredWithoutCommentsNestedInput {
  @TypeGraphQL.Field(_type => TaskCreateWithoutCommentsInput, {
    nullable: true
  })
  create?: TaskCreateWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => TaskCreateOrConnectWithoutCommentsInput, {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpsertWithoutCommentsInput, {
    nullable: true
  })
  upsert?: TaskUpsertWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: true
  })
  connect?: TaskWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateWithoutCommentsInput, {
    nullable: true
  })
  update?: TaskUpdateWithoutCommentsInput | undefined;
}
