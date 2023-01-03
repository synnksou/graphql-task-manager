import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksCreateManyOwnerIdInput } from "../inputs/TasksCreateManyOwnerIdInput";

@TypeGraphQL.InputType("TasksCreateManyOwnerIdInputEnvelope", {
  isAbstract: true
})
export class TasksCreateManyOwnerIdInputEnvelope {
  @TypeGraphQL.Field(_type => [TasksCreateManyOwnerIdInput], {
    nullable: false
  })
  data!: TasksCreateManyOwnerIdInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
