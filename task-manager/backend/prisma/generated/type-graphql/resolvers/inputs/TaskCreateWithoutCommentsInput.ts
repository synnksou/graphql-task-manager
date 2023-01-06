import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionCreateNestedManyWithoutTaskInput } from "../inputs/ActionCreateNestedManyWithoutTaskInput";
import { AssigneeCreateNestedManyWithoutTaskInput } from "../inputs/AssigneeCreateNestedManyWithoutTaskInput";
import { UserCreateNestedOneWithoutTasksInput } from "../inputs/UserCreateNestedOneWithoutTasksInput";
import { State } from "../../enums/State";

@TypeGraphQL.InputType("TaskCreateWithoutCommentsInput", {
  isAbstract: true
})
export class TaskCreateWithoutCommentsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutTasksInput, {
    nullable: true
  })
  ownerId?: UserCreateNestedOneWithoutTasksInput | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => State, {
    nullable: true
  })
  state?: "CREATED" | "PROGRESS" | "FINISHED" | undefined;

  @TypeGraphQL.Field(_type => ActionCreateNestedManyWithoutTaskInput, {
    nullable: true
  })
  actions?: ActionCreateNestedManyWithoutTaskInput | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => AssigneeCreateNestedManyWithoutTaskInput, {
    nullable: true
  })
  assignees?: AssigneeCreateNestedManyWithoutTaskInput | undefined;
}
