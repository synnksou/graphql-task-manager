import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksWhereInput } from "../inputs/TasksWhereInput";

@TypeGraphQL.InputType("TasksListRelationFilter", {
  isAbstract: true
})
export class TasksListRelationFilter {
  @TypeGraphQL.Field(_type => TasksWhereInput, {
    nullable: true
  })
  every?: TasksWhereInput | undefined;

  @TypeGraphQL.Field(_type => TasksWhereInput, {
    nullable: true
  })
  some?: TasksWhereInput | undefined;

  @TypeGraphQL.Field(_type => TasksWhereInput, {
    nullable: true
  })
  none?: TasksWhereInput | undefined;
}
