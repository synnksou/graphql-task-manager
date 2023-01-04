import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Action } from "../models/Action";
import { Assignee } from "../models/Assignee";
import { Comment } from "../models/Comment";
import { User } from "../models/User";
import { State } from "../enums/State";
import { TaskCount } from "../resolvers/outputs/TaskCount";

@TypeGraphQL.ObjectType("Task", {
  isAbstract: true,
  simpleResolvers: true
})
export class Task {
  @TypeGraphQL.Field(_type => TypeGraphQL.ID, {
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
  description?: string | null;

  ownerId?: User;

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

  comments?: Comment[];

  actions?: Action[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  assignees?: Assignee[];

  @TypeGraphQL.Field(_type => TaskCount, {
    nullable: true
  })
  _count?: TaskCount | null;
}
