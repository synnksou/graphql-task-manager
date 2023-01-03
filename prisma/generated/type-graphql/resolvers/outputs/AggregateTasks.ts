import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksCountAggregate } from "../outputs/TasksCountAggregate";
import { TasksMaxAggregate } from "../outputs/TasksMaxAggregate";
import { TasksMinAggregate } from "../outputs/TasksMinAggregate";

@TypeGraphQL.ObjectType("AggregateTasks", {
  isAbstract: true,
  simpleResolvers: true
})
export class AggregateTasks {
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
