import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionsCountAggregate } from "../outputs/ActionsCountAggregate";
import { ActionsMaxAggregate } from "../outputs/ActionsMaxAggregate";
import { ActionsMinAggregate } from "../outputs/ActionsMinAggregate";
import { Name } from "../../enums/Name";
import { TargetType } from "../../enums/TargetType";

@TypeGraphQL.ObjectType("ActionsGroupBy", {
  isAbstract: true,
  simpleResolvers: true
})
export class ActionsGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Name, {
    nullable: true
  })
  name!: "ADD" | "UPDATE" | "REMOVE" | null;

  @TypeGraphQL.Field(_type => TargetType, {
    nullable: true
  })
  targetType!: "TASK" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  targetId!: string;

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
