import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Name } from "../../enums/Name";
import { TargetType } from "../../enums/TargetType";

@TypeGraphQL.ObjectType("ActionMinAggregate", {
  isAbstract: true,
  simpleResolvers: true
})
export class ActionMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => Name, {
    nullable: true
  })
  name!: "ADD" | "UPDATE" | "REMOVE" | null;

  @TypeGraphQL.Field(_type => TargetType, {
    nullable: true
  })
  targetType!: "TASK" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  targetId!: string | null;
}
