import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsCountAggregate } from "../outputs/CommentsCountAggregate";
import { CommentsMaxAggregate } from "../outputs/CommentsMaxAggregate";
import { CommentsMinAggregate } from "../outputs/CommentsMinAggregate";
import { TargetType } from "../../enums/TargetType";

@TypeGraphQL.ObjectType("CommentsGroupBy", {
  isAbstract: true,
  simpleResolvers: true
})
export class CommentsGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => TargetType, {
    nullable: true
  })
  targetType!: "TASK" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  parentId!: string | null;

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

  @TypeGraphQL.Field(_type => CommentsCountAggregate, {
    nullable: true
  })
  _count!: CommentsCountAggregate | null;

  @TypeGraphQL.Field(_type => CommentsMinAggregate, {
    nullable: true
  })
  _min!: CommentsMinAggregate | null;

  @TypeGraphQL.Field(_type => CommentsMaxAggregate, {
    nullable: true
  })
  _max!: CommentsMaxAggregate | null;
}
