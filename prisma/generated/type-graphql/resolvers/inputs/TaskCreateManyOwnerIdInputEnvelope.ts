import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateManyOwnerIdInput } from "../inputs/TaskCreateManyOwnerIdInput";

@TypeGraphQL.InputType("TaskCreateManyOwnerIdInputEnvelope", {
  isAbstract: true
})
export class TaskCreateManyOwnerIdInputEnvelope {
  @TypeGraphQL.Field(_type => [TaskCreateManyOwnerIdInput], {
    nullable: false
  })
  data!: TaskCreateManyOwnerIdInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
