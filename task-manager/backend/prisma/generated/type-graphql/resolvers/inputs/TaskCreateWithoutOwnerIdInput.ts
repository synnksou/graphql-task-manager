import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionCreateNestedManyWithoutTaskInput } from "../inputs/ActionCreateNestedManyWithoutTaskInput";
import { AssigneeCreateNestedManyWithoutTaskInput } from "../inputs/AssigneeCreateNestedManyWithoutTaskInput";
import { CommentCreateNestedManyWithoutTaskInput } from "../inputs/CommentCreateNestedManyWithoutTaskInput";
import { State } from "../../enums/State";

@TypeGraphQL.InputType("TaskCreateWithoutOwnerIdInput", {
  isAbstract: true
})
export class TaskCreateWithoutOwnerIdInput {
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

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => State, {
    nullable: true
  })
  state?: "CREATED" | "PROGRESS" | "FINISHED" | undefined;

  @TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutTaskInput, {
    nullable: true
  })
  comments?: CommentCreateNestedManyWithoutTaskInput | undefined;

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
