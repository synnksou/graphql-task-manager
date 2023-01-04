import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskUpdateWithoutOwnerIdInput } from "../inputs/TaskUpdateWithoutOwnerIdInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpdateWithWhereUniqueWithoutOwnerIdInput", {
  isAbstract: true
})
export class TaskUpdateWithWhereUniqueWithoutOwnerIdInput {
  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskUpdateWithoutOwnerIdInput, {
    nullable: false
  })
  data!: TaskUpdateWithoutOwnerIdInput;
}
