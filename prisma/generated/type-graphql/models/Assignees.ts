import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Tasks } from "../models/Tasks";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("Assignees", {
  isAbstract: true,
  simpleResolvers: true
})
export class Assignees {
  @TypeGraphQL.Field(_type => TypeGraphQL.ID, {
    nullable: false
  })
  id!: string;

  User?: User;

  Tasks?: Tasks;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tasksId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;
}
