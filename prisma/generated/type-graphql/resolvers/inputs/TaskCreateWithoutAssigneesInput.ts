import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionCreateNestedManyWithoutTaskInput } from "../inputs/ActionCreateNestedManyWithoutTaskInput";
import { CommentCreateNestedManyWithoutTaskInput } from "../inputs/CommentCreateNestedManyWithoutTaskInput";
import { UserCreateNestedOneWithoutTaskssInput } from "../inputs/UserCreateNestedOneWithoutTaskssInput";
import { State } from "../../enums/State";

@TypeGraphQL.InputType("TaskCreateWithoutAssigneesInput", {
  isAbstract: true
})
export class TaskCreateWithoutAssigneesInput {
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

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutTaskssInput, {
    nullable: false
  })
  ownerId!: UserCreateNestedOneWithoutTaskssInput;

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
}