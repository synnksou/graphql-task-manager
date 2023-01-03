import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Notifications } from "../models/Notifications";
import { Tasks } from "../models/Tasks";
import { Name } from "../enums/Name";
import { TargetType } from "../enums/TargetType";
import { ActionsCount } from "../resolvers/outputs/ActionsCount";

@TypeGraphQL.ObjectType("Actions", {
  isAbstract: true,
  simpleResolvers: true
})
export class Actions {
  @TypeGraphQL.Field(_type => TypeGraphQL.ID, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Name, {
    nullable: true
  })
  name?: "ADD" | "UPDATE" | "REMOVE" | null;

  Tasks?: Tasks;

  @TypeGraphQL.Field(_type => TargetType, {
    nullable: true
  })
  targetType?: "TASK" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  targetId!: string;

  Notifications?: Notifications[];

  @TypeGraphQL.Field(_type => ActionsCount, {
    nullable: true
  })
  _count?: ActionsCount | null;
}
