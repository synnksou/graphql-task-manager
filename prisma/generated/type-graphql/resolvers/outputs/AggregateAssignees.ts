import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneesCountAggregate } from "../outputs/AssigneesCountAggregate";
import { AssigneesMaxAggregate } from "../outputs/AssigneesMaxAggregate";
import { AssigneesMinAggregate } from "../outputs/AssigneesMinAggregate";

@TypeGraphQL.ObjectType("AggregateAssignees", {
  isAbstract: true,
  simpleResolvers: true
})
export class AggregateAssignees {
  @TypeGraphQL.Field(_type => AssigneesCountAggregate, {
    nullable: true
  })
  _count!: AssigneesCountAggregate | null;

  @TypeGraphQL.Field(_type => AssigneesMinAggregate, {
    nullable: true
  })
  _min!: AssigneesMinAggregate | null;

  @TypeGraphQL.Field(_type => AssigneesMaxAggregate, {
    nullable: true
  })
  _max!: AssigneesMaxAggregate | null;
}
