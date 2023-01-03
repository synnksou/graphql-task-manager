import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionsCountAggregate } from "../outputs/ActionsCountAggregate";
import { ActionsMaxAggregate } from "../outputs/ActionsMaxAggregate";
import { ActionsMinAggregate } from "../outputs/ActionsMinAggregate";

@TypeGraphQL.ObjectType("AggregateActions", {
  isAbstract: true,
  simpleResolvers: true
})
export class AggregateActions {
  @TypeGraphQL.Field(_type => ActionsCountAggregate, {
    nullable: true
  })
  _count!: ActionsCountAggregate | null;

  @TypeGraphQL.Field(_type => ActionsMinAggregate, {
    nullable: true
  })
  _min!: ActionsMinAggregate | null;

  @TypeGraphQL.Field(_type => ActionsMaxAggregate, {
    nullable: true
  })
  _max!: ActionsMaxAggregate | null;
}
