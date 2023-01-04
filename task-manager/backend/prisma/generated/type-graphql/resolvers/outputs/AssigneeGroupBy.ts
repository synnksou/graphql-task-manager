import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneeCountAggregate } from "../outputs/AssigneeCountAggregate";
import { AssigneeMaxAggregate } from "../outputs/AssigneeMaxAggregate";
import { AssigneeMinAggregate } from "../outputs/AssigneeMinAggregate";

@TypeGraphQL.ObjectType("AssigneeGroupBy", {
  isAbstract: true,
  simpleResolvers: true
})
export class AssigneeGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  taskId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => AssigneeCountAggregate, {
    nullable: true
  })
  _count!: AssigneeCountAggregate | null;

  @TypeGraphQL.Field(_type => AssigneeMinAggregate, {
    nullable: true
  })
  _min!: AssigneeMinAggregate | null;

  @TypeGraphQL.Field(_type => AssigneeMaxAggregate, {
    nullable: true
  })
  _max!: AssigneeMaxAggregate | null;
}
