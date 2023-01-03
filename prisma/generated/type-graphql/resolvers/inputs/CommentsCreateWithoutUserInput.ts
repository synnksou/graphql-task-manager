import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsCreateNestedManyWithoutParentInput } from "../inputs/CommentsCreateNestedManyWithoutParentInput";
import { CommentsCreateNestedOneWithoutChildrenInput } from "../inputs/CommentsCreateNestedOneWithoutChildrenInput";
import { TasksCreateNestedOneWithoutCommentsInput } from "../inputs/TasksCreateNestedOneWithoutCommentsInput";
import { TargetType } from "../../enums/TargetType";

@TypeGraphQL.InputType("CommentsCreateWithoutUserInput", {
  isAbstract: true
})
export class CommentsCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => TasksCreateNestedOneWithoutCommentsInput, {
    nullable: false
  })
  Tasks!: TasksCreateNestedOneWithoutCommentsInput;

  @TypeGraphQL.Field(_type => TargetType, {
    nullable: true
  })
  targetType?: "TASK" | undefined;

  @TypeGraphQL.Field(_type => CommentsCreateNestedManyWithoutParentInput, {
    nullable: true
  })
  children?: CommentsCreateNestedManyWithoutParentInput | undefined;

  @TypeGraphQL.Field(_type => CommentsCreateNestedOneWithoutChildrenInput, {
    nullable: true
  })
  parent?: CommentsCreateNestedOneWithoutChildrenInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
