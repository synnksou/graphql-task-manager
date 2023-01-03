import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneesCreateNestedManyWithoutTasksInput } from "../inputs/AssigneesCreateNestedManyWithoutTasksInput";
import { CommentsCreateNestedManyWithoutTasksInput } from "../inputs/CommentsCreateNestedManyWithoutTasksInput";
import { UserCreateNestedOneWithoutTasksInput } from "../inputs/UserCreateNestedOneWithoutTasksInput";
import { State } from "../../enums/State";

@TypeGraphQL.InputType("TasksCreateWithoutActionsInput", {
  isAbstract: true
})
export class TasksCreateWithoutActionsInput {
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
    nullable: false
  })
  ownerId!: UserCreateNestedOneWithoutTasksInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => State, {
    nullable: true
  })
  state?: "CREATED" | "PROGRESS" | "FINISHED" | undefined;

  @TypeGraphQL.Field(_type => CommentsCreateNestedManyWithoutTasksInput, {
    nullable: true
  })
  Comments?: CommentsCreateNestedManyWithoutTasksInput | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => AssigneesCreateNestedManyWithoutTasksInput, {
    nullable: true
  })
  Assignees?: AssigneesCreateNestedManyWithoutTasksInput | undefined;
}
