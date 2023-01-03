import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksCountAggregate } from "../outputs/TasksCountAggregate";
import { TasksMaxAggregate } from "../outputs/TasksMaxAggregate";
import { TasksMinAggregate } from "../outputs/TasksMinAggregate";
import { State } from "../../enums/State";

@TypeGraphQL.ObjectType("TasksGroupBy", {
  isAbstract: true,
  simpleResolvers: true
})
export class TasksGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => State, {
    nullable: false
  })
  state!: "CREATED" | "PROGRESS" | "FINISHED";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => TasksCountAggregate, {
    nullable: true
  })
  _count!: TasksCountAggregate | null;

  @TypeGraphQL.Field(_type => TasksMinAggregate, {
    nullable: true
  })
  _min!: TasksMinAggregate | null;

  @TypeGraphQL.Field(_type => TasksMaxAggregate, {
    nullable: true
  })
  _max!: TasksMaxAggregate | null;
}
