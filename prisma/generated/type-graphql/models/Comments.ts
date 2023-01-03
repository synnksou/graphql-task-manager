import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Tasks } from "../models/Tasks";
import { User } from "../models/User";
import { TargetType } from "../enums/TargetType";
import { CommentsCount } from "../resolvers/outputs/CommentsCount";

@TypeGraphQL.ObjectType("Comments", {
  isAbstract: true,
  simpleResolvers: true
})
export class Comments {
  @TypeGraphQL.Field(_type => TypeGraphQL.ID, {
    nullable: false
  })
  id!: string;

  User?: User | null;

  Tasks?: Tasks;

  @TypeGraphQL.Field(_type => TargetType, {
    nullable: true
  })
  targetType?: "TASK" | null;

  children?: Comments[];

  parent?: Comments | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  parentId?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ownerId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tasksId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => CommentsCount, {
    nullable: true
  })
  _count?: CommentsCount | null;
}
