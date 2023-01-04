import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionCountAggregate } from "../outputs/ActionCountAggregate";
import { ActionMaxAggregate } from "../outputs/ActionMaxAggregate";
import { ActionMinAggregate } from "../outputs/ActionMinAggregate";

@TypeGraphQL.ObjectType("AggregateAction", {
  isAbstract: true,
  simpleResolvers: true
})
export class AggregateAction {
  @TypeGraphQL.Field(_type => ActionCountAggregate, {
    nullable: true
  })
  _count!: ActionCountAggregate | null;

  @TypeGraphQL.Field(_type => ActionMinAggregate, {
    nullable: true
  })
  _min!: ActionMinAggregate | null;

  @TypeGraphQL.Field(_type => ActionMaxAggregate, {
    nullable: true
  })
  _max!: ActionMaxAggregate | null;
}
