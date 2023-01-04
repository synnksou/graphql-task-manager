import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Notification } from "../models/Notification";
import { Task } from "../models/Task";
import { Name } from "../enums/Name";
import { TargetType } from "../enums/TargetType";
import { ActionCount } from "../resolvers/outputs/ActionCount";

@TypeGraphQL.ObjectType("Action", {
  isAbstract: true,
  simpleResolvers: true
})
export class Action {
  @TypeGraphQL.Field(_type => TypeGraphQL.ID, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Name, {
    nullable: true
  })
  name?: "ADD" | "UPDATE" | "REMOVE" | null;

  task?: Task;

  @TypeGraphQL.Field(_type => TargetType, {
    nullable: true
  })
  targetType?: "TASK" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  targetId!: string;

  notifications?: Notification[];

  @TypeGraphQL.Field(_type => ActionCount, {
    nullable: true
  })
  _count?: ActionCount | null;
}
