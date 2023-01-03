import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsCountAggregate } from "../outputs/CommentsCountAggregate";
import { CommentsMaxAggregate } from "../outputs/CommentsMaxAggregate";
import { CommentsMinAggregate } from "../outputs/CommentsMinAggregate";

@TypeGraphQL.ObjectType("AggregateComments", {
  isAbstract: true,
  simpleResolvers: true
})
export class AggregateComments {
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
