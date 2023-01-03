import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksCreateOrConnectWithoutCommentsInput } from "../inputs/TasksCreateOrConnectWithoutCommentsInput";
import { TasksCreateWithoutCommentsInput } from "../inputs/TasksCreateWithoutCommentsInput";
import { TasksWhereUniqueInput } from "../inputs/TasksWhereUniqueInput";

@TypeGraphQL.InputType("TasksCreateNestedOneWithoutCommentsInput", {
  isAbstract: true
})
export class TasksCreateNestedOneWithoutCommentsInput {
  @TypeGraphQL.Field(_type => TasksCreateWithoutCommentsInput, {
    nullable: true
  })
  create?: TasksCreateWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => TasksCreateOrConnectWithoutCommentsInput, {
    nullable: true
  })
  connectOrCreate?: TasksCreateOrConnectWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => TasksWhereUniqueInput, {
    nullable: true
  })
  connect?: TasksWhereUniqueInput | undefined;
}
