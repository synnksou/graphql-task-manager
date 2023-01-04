import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Task } from "../models/Task";
import { User } from "../models/User";
import { TargetType } from "../enums/TargetType";
import { CommentCount } from "../resolvers/outputs/CommentCount";

@TypeGraphQL.ObjectType("Comment", {
  isAbstract: true,
  simpleResolvers: true
})
export class Comment {
  @TypeGraphQL.Field(_type => TypeGraphQL.ID, {
    nullable: false
  })
  id!: string;

  owner?: User | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ownerId!: string;

  task?: Task;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  taskId!: string;

  @TypeGraphQL.Field(_type => TargetType, {
    nullable: true
  })
  targetType?: "TASK" | null;

  children?: Comment[];

  parent?: Comment | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  parentId?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => CommentCount, {
    nullable: true
  })
  _count?: CommentCount | null;
}
