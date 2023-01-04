import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionCountAggregate } from "../outputs/ActionCountAggregate";
import { ActionMaxAggregate } from "../outputs/ActionMaxAggregate";
import { ActionMinAggregate } from "../outputs/ActionMinAggregate";
import { Name } from "../../enums/Name";
import { TargetType } from "../../enums/TargetType";

@TypeGraphQL.ObjectType("ActionGroupBy", {
  isAbstract: true,
  simpleResolvers: true
})
export class ActionGroupBy {
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
