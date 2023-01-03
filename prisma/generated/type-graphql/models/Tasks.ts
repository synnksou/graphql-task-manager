import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Actions } from "../models/Actions";
import { Assignees } from "../models/Assignees";
import { Comments } from "../models/Comments";
import { User } from "../models/User";
import { State } from "../enums/State";
import { TasksCount } from "../resolvers/outputs/TasksCount";

@TypeGraphQL.ObjectType("Tasks", {
  isAbstract: true,
  simpleResolvers: true
})
export class Tasks {
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

  Comments?: Comments[];

  Actions?: Actions[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  Assignees?: Assignees[];

  @TypeGraphQL.Field(_type => TasksCount, {
    nullable: true
  })
  _count?: TasksCount | null;
}
